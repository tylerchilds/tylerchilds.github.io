import Markdown from '../../vendor/markdown.js';


export default function fetchAndRender() {
    var readme = [...document.querySelectorAll('.readme')];

    if(readme.length > 0){
        var converter = new Markdown.getSanitizingConverter();

        readme.map(function(elem){
            const url = `https://api.github.com/repos${elem.dataset.src}/readme`;

            fetch(url).then(response => {
                return response.json();
            }).then(data => {
                const markdown = atob( data.content );

                elem.innerHTML = converter.makeHtml(markdown);
            }).catch(error => {
                elem.innerHTML = 'Failed to load documentation';
            });
        });
    }
}
