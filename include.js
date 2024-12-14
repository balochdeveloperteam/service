function includeHTML() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var file = element.getAttribute('data-include');
        if (file) {
            console.log(`Fetching file: ${file}`); // Debug log
            fetch(file)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        console.error(`Error fetching ${file}: ${response.statusText}`);
                        return null;
                    }
                })
                .then(data => {
                    if (data) {
                        element.innerHTML = data;
                        element.removeAttribute('data-include');
                    }
                })
                .catch(error => console.error('Fetch error:', error));
            return;
        }
    }
}

document.addEventListener('DOMContentLoaded', includeHTML);