export default function template(options) {
    const params =  {
        css: '',
        js: '',
        html: '',
        ...options
    };
    const cssURL = getBlobURL(params.css, 'text/css');
    const jsURL = getBlobURL(params.js, 'text/css');

    const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>${params.title}</title>

        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="apple-touch-fullscreen" content="yes">

        <link href="${cssURL}" rel="stylesheet" type="text/css" />
        </head>
        <body>
            ${html}
            <script type="javascript" src="${jsURL}"></script>
        </body>
        </html>`;

    return getBlobURL(html, 'text/html');
}

function getBlobURL(code, type) {
      const blob = new Blob([code], { type })
      return URL.createObjectURL(blob)
}
