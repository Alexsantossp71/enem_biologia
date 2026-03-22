const fs = require('fs');
const path = require('path');

function mdToHtml(md) {
    let html = md;

    // Remove the first H1 line (chapter title) - we already show it in the page header
    html = html.replace(/^# .+\r?\n\r?\n/, '');

    // Convert **bold** to <strong>
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Convert *italic* to <em>
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Process lines
    const lines = html.split(/\r?\n/);
    let result = [];
    let inList = false;
    let inSubList = false;
    let inScienceBlock = false;
    let lastWasEmpty = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        const trimmed = line.trim();

        if (trimmed === '') {
            if (inSubList) { result.push('</ul>'); inSubList = false; }
            if (inList) { result.push('</ul>'); inList = false; }
            lastWasEmpty = true;
            continue;
        }

        // Science section headers (bold lines that start a topic)
        if (trimmed.startsWith('<strong>') && trimmed.endsWith('</strong>') && !trimmed.includes('- ')) {
            if (inSubList) { result.push('</ul>'); inSubList = false; }
            if (inList) { result.push('</ul>'); inList = false; }
            if (inScienceBlock) { result.push('</div>'); }
            inScienceBlock = true;
            const title = trimmed.replace(/<\/?strong>/g, '');
            result.push(`<div class="science-block"><h3>${title}</h3>`);
            lastWasEmpty = false;
            continue;
        }

        // Sub-list items (start with spaces + -)
        if (/^\s{2,}- /.test(line)) {
            const content = line.replace(/^\s+- /, '').trim();
            if (!inSubList) { result.push('<ul>'); inSubList = true; }
            result.push(`<li>${content}</li>`);
            lastWasEmpty = false;
            continue;
        }

        // List items (start with -)
        if (trimmed.startsWith('- ')) {
            const content = trimmed.replace(/^- /, '');
            if (inSubList) { result.push('</ul>'); inSubList = false; }
            if (!inList) { result.push('<ul>'); inList = true; }
            result.push(`<li>${content}</li>`);
            lastWasEmpty = false;
            continue;
        }

        // Numbered list items
        if (/^\d+\.\s/.test(trimmed)) {
            const content = trimmed.replace(/^\d+\.\s/, '');
            if (!inList) { result.push('<ul>'); inList = true; }
            result.push(`<li>${content}</li>`);
            lastWasEmpty = false;
            continue;
        }

        // Close open lists for non-list content
        if (inSubList) { result.push('</ul>'); inSubList = false; }
        if (inList) { result.push('</ul>'); inList = false; }

        // Check if it's a narrative/story paragraph (no markdown formatting, not a header)
        const isNarrative = !trimmed.startsWith('<strong>') && !trimmed.startsWith('#') &&
            !trimmed.startsWith('-') && !trimmed.startsWith('"') &&
            trimmed.length > 0;

        // Dialogue lines (starting with —)
        if (trimmed.startsWith('—') || trimmed.startsWith('—')) {
            if (inScienceBlock) { result.push('</div>'); inScienceBlock = false; }
            result.push(`<div class="story-text"><p>${trimmed}</p></div>`);
            lastWasEmpty = false;
            continue;
        }

        // Quoted text from the mother
        if (trimmed.startsWith('"') || trimmed.startsWith('\u201c')) {
            if (inScienceBlock) { result.push('</div>'); inScienceBlock = false; }
            result.push(`<div class="story-text"><p>${trimmed}</p></div>`);
            lastWasEmpty = false;
            continue;
        }

        // Regular paragraph
        if (inScienceBlock) {
            result.push(`<p>${trimmed}</p>`);
        } else {
            result.push(`<div class="story-text"><p>${trimmed}</p></div>`);
        }
        lastWasEmpty = false;
    }

    if (inSubList) result.push('</ul>');
    if (inList) result.push('</ul>');
    if (inScienceBlock) result.push('</div>');

    return result.join('\n');
}

// Build THEORY_CONTENT object
let output = `// ============================================\n`;
output += `// O ARQUIVO ÉRIS — Theory Content per Chapter\n`;
output += `// HTML content for each chapter's theory section\n`;
output += `// Generated from conteudo.md files\n`;
output += `// ============================================\n\n`;
output += `const THEORY_CONTENT = {\n`;

for (let i = 1; i <= 8; i++) {
    const mdPath = path.join(__dirname, `capitulo_${i}`, 'conteudo.md');
    const md = fs.readFileSync(mdPath, 'utf-8');
    const html = mdToHtml(md);

    // Escape backticks and ${} in template literal
    const escaped = html.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

    output += `    ${i}: \`\n${escaped}\n\`${i < 8 ? ',' : ''}\n\n`;
}

output += `};\n`;

fs.writeFileSync(path.join(__dirname, 'js', 'theory.js'), output, 'utf-8');
console.log('theory.js generated successfully with full content from all chapters!');
