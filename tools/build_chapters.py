# -*- coding: utf-8 -*-
"""
build_chapters.py — Gera os arquivos capN_biologia.html a partir do modelo
de capítulo e dos dados em caps_2_4.py, caps_5_7.py, caps_8_10.py e
caps_11_13.py.

Uso:  python3 tools/build_chapters.py
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from caps_2_4 import CAPS_2_4
from caps_5_7 import CAPS_5_7
from caps_8_10 import CAPS_8_10
from caps_11_13 import CAPS_11_13

ALL_CAPS = CAPS_2_4 + CAPS_5_7 + CAPS_8_10 + CAPS_11_13

TEMPLATE = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="@@META_DESC@@">
  <meta name="keywords" content="@@KEYWORDS@@">
  <meta property="og:title" content="Capítulo @@NUM@@: @@TITLE@@ | Trilhas de Biologia">
  <meta property="og:description" content="@@OG_DESC@@">
  <meta property="og:type" content="website">
  <title>Capítulo @@NUM@@: @@TITLE@@ | Trilhas de Biologia ENEM</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header>
    <h1>🔬 Trilhas de Biologia - ENEM</h1>
    <p>Capítulo @@NUM@@: @@SUBTITLE@@</p>
  </header>

  <nav>
    <ul>
      <li><a href="index.html">Início</a></li>
@@NAV_EXTRA@@
      <li><a href="#conteudo">Conteúdo</a></li>
      <li><a href="#modelo-3d">Modelo 3D</a></li>
      <li><a href="#quiz">Quiz</a></li>
    </ul>
  </nav>

  <div class="container">

    <div class="chap-nav">
@@CHAP_NAV@@
    </div>

    <article class="page-content" id="conteudo">
@@SECTIONS@@
    </article>

    <section class="page-content" id="modelo-3d">
      <h2 class="section-title">
        🔬 Modelo 3D Interativo: @@SCENE_TITLE@@
      </h2>
      <p class="model-intro">Arraste o mouse sobre o modelo abaixo para rotacionar e observar as estruturas em 360°:</p>
@@STAGES@@
      <div id="canvas-container" data-three-scene="@@SCENE@@">
        <div class="canvas-label">🖱️ Arraste para rotacionar • Scroll para zoom</div>
      </div>

      <div class="legend-grid">
@@LEGEND@@
      </div>

@@EXT3D@@
    </section>

    <section class="page-content" id="quiz">
      <h2 class="section-title">
        📝 Teste Seus Conhecimentos
      </h2>
@@QUIZ@@
      <div id="quiz-result" class="quiz-result"></div>
      <button class="btn quiz-action" onclick="checkQuiz({@@ANSWERS@@})">Verificar Respostas</button>
    </section>

  </div>

  <footer>
    <p>© 2024 Trilhas de Biologia - ENEM | Desenvolvido para estudantes brasileiros</p>
    <p class="footer-sub">
      <a href="index.html" class="footer-link">Voltar ao Início</a> |
      <a href="#" class="footer-link">Sobre</a> |
      <a href="#" class="footer-link">Contato</a>
    </p>
  </footer>

  <script src="js/main.js"></script>
  <script type="module" src="js/three-viewer.js"></script>
</body>
</html>
"""


def render_table(t):
    head = "".join(f"<th>{x}</th>" for x in t["head"])
    rows = "".join(
        "<tr>" + "".join(f"<td>{c}</td>" for c in row) + "</tr>"
        for row in t["rows"]
    )
    return (
        '<table class="comparison-table">\n'
        f"<thead><tr>{head}</tr></thead>\n"
        f"<tbody>{rows}</tbody>\n</table>"
    )


def render_sections(sections):
    out = []
    fig = 1
    for s in sections:
        out.append('      <section class="story-section">')
        out.append(f'        <h2>{s.get("icon", "📘")} {s["title"]}</h2>')
        out.append('        <div class="story-text">')
        for p in s.get("paras", []):
            out.append(f"          <p>{p}</p>")
        if s.get("quote"):
            text, author = s["quote"]
            out.append(
                '          <div class="quote">\n'
                f'            <p>"{text}"</p>\n'
                f"            <p><strong>— {author}</strong></p>\n"
                "          </div>"
            )
        if s.get("list"):
            items = "".join(f"<li>{i}</li>" for i in s["list"])
            out.append(f'          <ol class="steps-list">{items}</ol>')
        if s.get("table"):
            out.append("          " + render_table(s["table"]))
        if s.get("img"):
            src, alt, caption = s["img"]
            out.append(
                '          <figure class="image-container">\n'
                f'            <img src="{src}" alt="{alt}" class="content-image" loading="lazy">\n'
                f"            <figcaption>{caption}</figcaption>\n"
                "          </figure>"
            )
        if s.get("tip"):
            out.append(f'          <div class="tip-card"><strong>💡 Dica ENEM:</strong> {s["tip"]}</div>')
        out.append("        </div>")
        out.append("      </section>")
        fig += 1
    return "\n".join(out)


def render_legend(legend):
    return "\n".join(
        f'        <div class="legend-item" style="background: {bg};">\n'
        f'          <strong style="color: {cor};">{icone} {nome}</strong>\n'
        f"          <p>{desc}</p>\n"
        "        </div>"
        for bg, cor, icone, nome, desc in legend
    )


def render_ext3d(ext3d):
    title, url, desc = ext3d
    return (
        '      <div class="external-3d-card">\n'
        '        <div class="external-3d-icon">🌐</div>\n'
        '        <div class="external-3d-info">\n'
        f"          <h3>{title}</h3>\n"
        f"          <p>{desc} <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">Ver modelo no Sketchfab →</a></p>\n"
        "        </div>\n"
        "      </div>"
    )


def render_stages(scene):
    if scene != "mitosis":
        return ""
    buttons = [("prophase", "Prófase"), ("metaphase", "Metáfase"),
               ("anaphase", "Anáfase"), ("telophase", "Telófase")]
    return '<div class="scene-stages">' + "".join(
        f'<button data-viewer-stage="{key}">{label}</button>' for key, label in buttons
    ) + "</div>"


def render_quiz(quiz):
    out = []
    for i, (q, alts, _answer) in enumerate(quiz, start=1):
        out.append('      <div class="quiz-card">')
        out.append(f'        <p class="quiz-question">{i}. {q}</p>')
        for letter, alt in zip("abcd", alts):
            out.append(
                f'        <label class="quiz-option"><input type="radio" name="q{i}" value="{letter}"> {letter}) {alt}</label>'
            )
        out.append("      </div>")
    return "\n".join(out)


def build_chapter(cap):
    num = cap["num"]

    nav_extra = []
    if num > 1:
        nav_extra.append(f'      <li><a href="cap{num-1}_biologia.html">Capítulo {num-1}</a></li>')
    if num < 13:
        nav_extra.append(f'      <li><a href="cap{num+1}_biologia.html">Capítulo {num+1}</a></li>')

    chap_nav = []
    if num > 1:
        chap_nav.append(f'      <a href="cap{num-1}_biologia.html" class="btn btn-ghost">← Capítulo {num-1}</a>')
    chap_nav.append('      <a href="index.html" class="btn btn-ghost">🏠 Início</a>')
    if num < 13:
        chap_nav.append(f'      <a href="cap{num+1}_biologia.html" class="btn">Próximo: Capítulo {num+1} →</a>')

    answers = ", ".join(f"q{i}: '{ans}'" for i, (_q, _a, ans) in enumerate(cap["quiz"], start=1))

    html = (TEMPLATE
            .replace("@@NUM@@", str(num))
            .replace("@@TITLE@@", cap["title"])
            .replace("@@SUBTITLE@@", cap["subtitle"])
            .replace("@@META_DESC@@", cap["meta_desc"])
            .replace("@@KEYWORDS@@", cap["keywords"])
            .replace("@@OG_DESC@@", cap["og_desc"])
            .replace("@@NAV_EXTRA@@", "\n".join(nav_extra))
            .replace("@@CHAP_NAV@@", "\n".join(chap_nav))
            .replace("@@SECTIONS@@", render_sections(cap["sections"]))
            .replace("@@SCENE@@", cap["scene"])
            .replace("@@SCENE_TITLE@@", cap["scene_title"])
            .replace("@@STAGES@@", render_stages(cap["scene"]))
            .replace("@@LEGEND@@", render_legend(cap["legend"]))
            .replace("@@EXT3D@@", render_ext3d(cap["ext3d"]))
            .replace("@@QUIZ@@", render_quiz(cap["quiz"]))
            .replace("@@ANSWERS@@", answers))

    path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        f"cap{num}_biologia.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"OK: cap{num}_biologia.html ({len(html)} bytes)")


if __name__ == "__main__":
    for cap in ALL_CAPS:
        build_chapter(cap)
    print(f"\n{len(ALL_CAPS)} capítulos gerados com sucesso!")
