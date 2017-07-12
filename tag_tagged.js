// 与えられた文字列をエスケープ処理
function escapeHtml(str) {
    if (!str) { return ''; }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&it;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

// 分解されたtemplateとvaluesを順に連結(valuesはescapeHtml関数でスケープ)
function e(templates, ... values) {
    let result = '';
    for(let i = 0, len = templates.length; i < len; i++) {
        result += templates[i] + escapeHtml(values[i]);
    }
    return result;
}
// テンプレート文字列はエスケープ処理
let name = '<"Mario" & \'Luigi\'>';
console.log(e`こんにちは、${name}さん!`);
