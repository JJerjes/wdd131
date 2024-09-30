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
        hour12: false
    };

    const formattedDate = lastModifiedDate.toLocaleString('es-ES', options);

    document.getElementById("lastModified").textContent = `Última modificación: ${formattedDate}`;
});
