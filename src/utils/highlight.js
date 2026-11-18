// Turns plain code text into colored HTML (comments, strings, numbers, keywords).
// "{caret}" in the text becomes a blinking cursor.
const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const TOKEN =
  /(\/\/[^\n]*)|(`[^`]*`|"[^"\n]*"|'[^'\n]*')|(\b\d+(?:\.\d+)?\b)|(\b(?:const|let|var|if|return|function)\b)/g;

export function highlight(code) {
  return escapeHtml(code)
    .replace(TOKEN, (m, comment, str, num) => {
      const cls = comment ? "c" : str ? "s" : num ? "n" : "k";
      return `<span class="${cls}">${m}</span>`;
    })
    .replace("{caret}", '<span class="caret"></span>');
}
