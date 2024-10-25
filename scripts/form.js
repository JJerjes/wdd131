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

    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
      const productSelect = document.querySelector('#nameSelect');
      products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const reviewCountElement = document.getElementById('reviewCount');
    let reviewCount = localStorage.getItem('reviewCount') || 0;

    // Actualiza el contador al cargar la página
    reviewCountElement.textContent = `Total Reviews: ${reviewCount}`;

    // Incrementar el contador al enviar el formulario
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío real del formulario
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
        reviewCountElement.textContent = `Total Reviews: ${reviewCount}`;
        form.reset(); // Reinicia el formulario

        // let reviewCount = localStorage.getItem('reviewCount');
        // if (!reviewCount) {
        //     reviewCount = 0;
        // } else {
        //     reviewCount = parseInt(reviewCount)
        // }

        // reviewCount += 1;

        // localStorage.setItem('reviewCount', reviewCount);
        // document.getElementById('reviewCount').textContent = `Total Reviews: ${reviewCount}`;

});

});
