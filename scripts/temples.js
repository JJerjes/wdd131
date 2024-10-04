document.addEventListener('DOMContentLoaded', () => {
    const currentyear = document.querySelector('#currentyear');
    const today = new Date();

    currentyear.innerHTML = `&copy;<span class='highlight'>${today.getFullYear()} 🌺 Jerjes Mariluz Caciano 🌺 Lima</span>`;

    const lastModifiedDate = new Date(document.lastModified);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formattedDate = lastModifiedDate.toLocaleString('en-US', options);

    document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;
    
    const menuButton = document.querySelector('#menu');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main')

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuButton.classList.toggle('open');

        if(nav.classList.contains('active')) {
            main.style.marginTop = '300px';
        }else {
            main.style.marginTop = '0';
        }
    });
});


