// Testes da função checkQuiz (js/main.js) executados em Node via vm + mock de DOM.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const mainSrc = fs.readFileSync(path.join(__dirname, '..', 'js', 'main.js'), 'utf8');

function makeDom(selected) {
  const resultEl = {
    innerHTML: '',
    className: '',
    style: {},
    closest: () => null,
    scrollIntoView: () => {}
  };
  const document = {
    getElementById: (id) => (id === 'quiz-result' ? resultEl : null),
    querySelector: (sel) => {
      const checked = sel.match(/input\[name="(.+?)"\]:checked/);
      if (checked) {
        const v = selected[checked[1]];
        return v ? { name: checked[1], value: v, checked: true, form: null, closest: () => null } : null;
      }
      return null;
    }
  };
  return { document, resultEl };
}

function run(selected) {
  const { document, resultEl } = makeDom(selected);
  const store = {};
  const localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; }
  };
  const sandbox = { document, window: {}, console, localStorage };
  vm.createContext(sandbox);
  vm.runInContext(mainSrc + '\nthis.checkQuiz = window.checkQuiz;', sandbox);
  sandbox.checkQuiz({ q1: 'b', q2: 'c' });
  return resultEl;
}

let failures = 0;
function assert(cond, msg) {
  if (!cond) { failures++; console.error('FAIL:', msg); }
  else console.log('ok:', msg);
}

let r = run({ q1: 'b', q2: 'c' });
assert(r.className.includes('quiz-result--success'), 'todas corretas -> classe success');
assert(r.innerHTML.includes('Excelente'), 'todas corretas -> mensagem de sucesso');
assert(r.innerHTML.includes('2 de 2'), 'todas corretas -> 2 de 2');

r = run({ q1: 'b', q2: 'a' });
assert(r.className.includes('quiz-result--partial'), 'parcial -> classe partial');
assert(r.innerHTML.includes('1 de 2'), 'parcial -> 1 de 2');

r = run({});
assert(r.className.includes('quiz-result--partial'), 'nenhuma -> classe partial');
assert(r.innerHTML.includes('0 de 2'), 'nenhuma -> 0 de 2');

if (failures > 0) { console.error(`\n${failures} teste(s) falharam.`); process.exit(1); }
else console.log('\nTodos os testes passaram.');
