const log = console.log.bind(console)

//sectors
const select = {
    E: e => document.querySelector(e),
    E_s: e => document.querySelectorAll(e)
}

const crtE = (options) => {
    let _options = options ? options : {}
    let _classes = _options.classes ? _options.classes : []
    let _tagName = _options.tagName ? _options.tagName : "div"
    let _attrs = _options.attrs ? _options.attrs : {}
    let _text = _options.text ? _options.text : ''
    let _html = _options.html ? _options.html : ''
    let e = document.createElement(_tagName)
    e.innerText = _text
    e.className = _classes.toString().split(",").join(' ')
    if (_attrs.length > 0) {
        for (i in _attrs) {
            e.setAttribute(i, _attrs[i])
        }
    }
    return e
}
var dynamicLoading = {
    css: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
}

const css = (el) => {
    var sheets = document.styleSheets,
        ret = [];
    el.matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector ||
        el.msMatchesSelector || el.oMatchesSelector;
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (el.matches(rules[r].selectorText)) {
                ret.push(rules[r].cssText);
            }
        }
    }
    return ret;
}

function filterInheritedStyles(el) {
    var tester = document.createElement(el.tagName);
    document.body.appendChild(tester); // 基础元素必须插入到文档中才能计算出默认样式
    var defaultStyle = window.getComputedStyle(tester, null);
    log(defaultStyle)
    var currentStyle = window.getComputedStyle(el, null);
    log(currentStyle)
    var ret = {};

    for (var k in currentStyle) {
        if (currentStyle.getPropertyValue(k) !== defaultStyle.getPropertyValue(k)) {
            ret[k] = currentStyle.getPropertyValue(k);
        }
    }

    document.body.removeChild(tester);
    return ret;
}


export {
    log,
    crtE,
    select,
    dynamicLoading,
    css,
    filterInheritedStyles
}