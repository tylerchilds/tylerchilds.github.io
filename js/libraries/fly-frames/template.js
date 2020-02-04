export default function template(options) {
    const params =  {
        css: '',
        js: '',
        html: '',
        ...options
    };

    const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>${params.title}</title>

        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="apple-touch-fullscreen" content="yes">

        <style type="text/css">
            ${params.css}
        </style>
        </head>
        <body>
            ${params.html}
            <script type="text/javascript">
                ${params.js}
            </script>
        </body>
        </html>`;

    return getBlobURL(html, 'text/html');
}

function getBlobURL(code, type) {
      const blob = new Blob([code], { type })
      return URL.createObjectURL(blob)
}
