
    document.addEventListener('DOMContentLoaded', () => {
        const jsIcon = document.getElementById('js-icon');
        const jsMenu = document.getElementById('js-menu');

        jsIcon.addEventListener('click', () => {
            if (jsMenu.classList.contains('hidden')) {
                jsMenu.classList.remove('hidden');
                jsMenu.classList.add('visible');
            } else {
                jsMenu.classList.remove('visible');
                jsMenu.classList.add('hidden');
            }
        });
    });
