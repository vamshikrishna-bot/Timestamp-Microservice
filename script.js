const { useState } = React;

const DEFAULT_MARKDOWN = `# A little corner of the web

## Notes from the field

Markdown keeps writing simple, and **the ideas stay front and center**.

> Make it simple, but significant.

Here is a useful link to the [Markdown Guide](https://www.markdownguide.org/), plus a little inline code: \`const idea = "keep exploring";\`

### A few things to remember

- Take the scenic route
- Stay curious
- Make something useful

\`\`\`js
function sayHello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

![A quiet mountain landscape](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85)

*Written slowly, with care.*`;

marked.setOptions({ gfm: true, breaks: true });

function App() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Ink and Pixel home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>ink<span className="brand-amp">&</span>pixel</span>
        </a>
        <span className="topbar-note">A small space for big ideas</span>
        <span className="live-status"><span className="status-dot" /> LIVE PREVIEW</span>
      </header>

      <section className="intro">
        <p className="eyebrow">THE MARKDOWN STUDIO</p>
        <h1>Write it. <em>See it.</em></h1>
        <p className="intro-copy">A calm little place to turn plain text into something lovely.</p>
      </section>

      <section className="workspace" aria-label="Markdown editor and preview">
        <article className="pane editor-pane">
          <div className="pane-heading">
            <div>
              <span className="pane-kicker">01 / COMPOSE</span>
              <h2>Your markdown</h2>
            </div>
            <span className="format-badge">MARKDOWN</span>
          </div>
          <label className="sr-only" htmlFor="editor">Write markdown here</label>
          <textarea
            id="editor"
            spellCheck="false"
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
            aria-describedby="editor-hint"
          />
          <div className="editor-footer" id="editor-hint">
            <span>Tip: use <code>#</code> for a heading</span>
            <span>{markdown.length} characters</span>
          </div>
        </article>

        <article className="pane preview-pane">
          <div className="pane-heading">
            <div>
              <span className="pane-kicker">02 / PREVIEW</span>
              <h2>The finished page</h2>
            </div>
            <span className="preview-sparkle" aria-hidden="true">✦</span>
          </div>
          <div
            id="preview"
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
          />
        </article>
      </section>

      <footer className="page-footer">
        <span>MADE FOR THE LOVE OF WORDS</span>
        <span>TYPE SOMETHING, MAKE SOMETHING <span aria-hidden="true">↗</span></span>
      </footer>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
