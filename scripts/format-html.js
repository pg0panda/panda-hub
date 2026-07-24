const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(process.cwd(), "out");
const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

function pushLine(lines, indentLevel, text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return;
  }

  lines.push(`${"  ".repeat(indentLevel)}${trimmed}`);
}

function formatHtml(content) {
  const lines = [];
  let indentLevel = 0;
  let index = 0;

  while (index < content.length) {
    if (content[index] === "<") {
      const isComment = content.startsWith("<!--", index);
      const isDoctype = content.startsWith("<!", index) && !isComment;

      if (isComment) {
        const end = content.indexOf("-->", index + 4);
        if (end !== -1) {
          pushLine(lines, indentLevel, content.slice(index, end + 3));
          index = end + 3;
          continue;
        }
      }

      if (isDoctype) {
        const end = content.indexOf(">", index);
        if (end !== -1) {
          pushLine(lines, indentLevel, content.slice(index, end + 1));
          index = end + 1;
          continue;
        }
      }

      const nextClose = content.indexOf(">", index + 1);
      if (nextClose === -1) {
        break;
      }

      const token = content.slice(index, nextClose + 1);
      const tagMatch = token.match(/^<\/?([a-zA-Z0-9:-]+)/);
      const tagName = tagMatch ? tagMatch[1].toLowerCase() : "";
      const isClosing = /^<\//.test(token);
      const isSelfClosing = /\/>$/.test(token) || VOID_TAGS.has(tagName);

      if (isClosing) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      pushLine(lines, indentLevel, token);

      if (!isClosing && !isSelfClosing && !token.startsWith("<!") && tagName) {
        indentLevel += 1;
      }

      index = nextClose + 1;
      continue;
    }

    const nextTag = content.indexOf("<", index);
    const textSlice = nextTag === -1 ? content.slice(index) : content.slice(index, nextTag);
    const trimmedText = textSlice.trim();

    if (trimmedText) {
      pushLine(lines, indentLevel, trimmedText);
    }

    index = nextTag === -1 ? content.length : nextTag;
  }

  return lines.join("\n");
}

function walkAndFormat(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walkAndFormat(fullPath);
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".html")) {
      continue;
    }

    const original = fs.readFileSync(fullPath, "utf8");
    const formatted = formatHtml(original);
    fs.writeFileSync(fullPath, formatted + "\n", "utf8");
  }
}

if (fs.existsSync(OUT_DIR)) {
  walkAndFormat(OUT_DIR);
  console.log("HTML export files were formatted.");
} else {
  console.log("No out directory found. Run a build first.");
}
