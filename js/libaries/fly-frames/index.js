import template from './template.js';

export default function flyFrame(iframe, options) {
    const params =  {
        markupIDs: [],
        scriptIDs: [],
        styleIDs: [],
        ...options
    };

    const templateConfig = {
        css: styleIDs.reduce(concat, ''),
        js: scriptIDs.reduce(concat, ''),
        html: markupIDs.reduce(concat, ''),
    }

    document.getElementById(iframeId).src = template(templateConfig);
}

function concat(memo, id) {
    const content = document.getElementById(id);
    memo += content.innerHTML;
}
