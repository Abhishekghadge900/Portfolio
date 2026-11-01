const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};

const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => map[ch]);

module.exports = escapeHtml;
