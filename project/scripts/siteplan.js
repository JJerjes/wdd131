// document.getElementById('menu').addEventListener('click', function() {
//     const nav = document.querySelector('nav');
//     nav.classList.toggle('open'); // Alternar la clase 'open' en nav
//     this.classList.toggle('open'); // Alternar la clase 'open' en el botón de menú
// });

// document.getElementById('menu').addEventListener('click', function() {
//   const nav = document.querySelector('nav');
//   const main = document.querySelector('main'); // Selecciona el main
//   nav.classList.toggle('open'); // Alternar la clase 'open' en nav
//   this.classList.toggle('open'); // Alternar la clase 'open' en el botón de menú

//   // Alternar la clase 'menu-open' en el main
//   if (nav.classList.contains('open')) {
//       main.classList.add('menu-open'); // Añadir padding si el menú está abierto
//   } else {
//       main.classList.remove('menu-open'); // Quitar padding si el menú está cerrado
//   }
// });

// const card = document.querySelector('#card');

// const album = [
//   {
//       albumName: "Aba Nigeria",
//       location: "Aba, Nigeria",
//       dedicated: "1800, August, 7",
//       area: 11500,
//       imageUrl:"https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Sin-t%C3%ADtulo-1.jpg"
//     },
//     {
//       albumName: "Manti Utah",
//       location: "Manti, Utah, United States",
//       dedicated: "1888, May, 21",
//       area: 74792,
//       imageUrl:
//       "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Servicio-de-Pintura-en-General1.jpg"
//     },
//     {
//       albumName: "Payson Utah",
//       location: "Payson, Utah, United States",
//       dedicated: "1890, June, 7",
//       area: 96630,
//       imageUrl:
//       "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Servicio-de-Pintura-en-Genera11.jpg"
//     },
//     {
//       albumName: "Yigo Guam",
//       location: "Yigo, Guam",
//       dedicated: "2020, May, 2",
//       area: 6861,
//       imageUrl:
//       "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Gasfiter%C3%ADa2.jpg"
//     },
//     {
//       albumName: "Washington D.C.",
//       location: "Kensington, Maryland, United States",
//       dedicated: "1974, November, 19",
//       area: 156558,
//       imageUrl:
//       "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Gasfiter%C3%ADa5.jpg"
//     },
//     {
//       albumName: "Lima Perú",
//       location: "Lima, Perú",
//       dedicated: "1986, January, 10",
//       area: 9600,
//       imageUrl:
//       "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Gasfiter%C3%ADa.jpg"
//     },
//     {
//       albumName: "Mexico City Mexico",
//       location: "Mexico City, Mexico",
//       dedicated: "1983, December, 2",
//       area: 116642,
//       imageUrl:
//       "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Instalaci%C3%B3n-de-Electricidad3.jpg"
//     },
//     // Add more temple objects here...

//     {
//         albumName: "Hartford Connectitud",
//         location: "Connectitud, United States",
//         dedicated: "2016, November, 20",
//         area: 9600,
//         imageUrl:
//         "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Instalaci%C3%B3n-de-Electricidad5.jpg"
       
//       },
//       {
//         albumName: "Helena Montana United States",
//         location: "Helena Montana, United States",
//         dedicated: "2023, June, 18",
//         area: 116642,
//         imageUrl:
//         "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Instalaci%C3%B3n-de-Electricidad.jpg"
//       },
//   ];

// function displayAlbum(album) {
//   card.innerHTML = '';
//   album.forEach((element) => {

//     const cardAlbum = document.createElement('div');
//     cardAlbum.className = 'card-album';
  
//     const nameAlbum = document.createElement('h2');
//     nameAlbum.textContent = element.albumName;
//     cardAlbum.appendChild(nameAlbum) 
  
//     const locationAlbum = document.createElement('p');
//     locationAlbum.textContent = `Location: ${element.location}`;
//     cardAlbum.appendChild(locationAlbum);
  
//     const dedicatedAlbum = document.createElement('p');
//     dedicatedAlbum.textContent = `Dedicated: ${element.dedicated}`;
//     cardAlbum.appendChild(dedicatedAlbum);
  
//     const areaAlbum = document.createElement('p');
//     areaAlbum.textContent = `Size: ${element.area} sq ft`;
//     cardAlbum.appendChild(areaAlbum);
  
//     const imageAlbum = document.createElement('img');
//     imageAlbum.src = element.imageUrl;
//     imageAlbum.alt = element.nameAlbum;
//     imageAlbum.loading = 'lazy';
//     cardAlbum.appendChild(imageAlbum);
  
//     card.appendChild(cardAlbum);
      
//   });
// }

// displayAlbum(album)

// document.querySelector('#allWorks').addEventListener('click', () => displayTemples(album));
// document.querySelector('.header h2').textContent = 'General Gallery';

// document.querySelector('#painting').addEventListener('click', () => {
//   const painting = album.filter(albu => albu.dedicated.includes('1800') || albu.dedicated.includes('1888') || albu.dedicated.includes('1890'));
//   displayAlbum(painting);
//   document.querySelector('.header h2').textContent = 'Painting Gallery';
// });

// document.querySelector('#plumbing').addEventListener('click', () => {
//   const Plumbing = album.filter(albu => (albu.dedicated.includes('2020') || albu.dedicated.includes('1974') || albu.dedicated.includes('1986')));
//   displayAlbum(Plumbing);
//   document.querySelector('.header h2').textContent = 'Plumbing Gallery';
// });

// document.querySelector('#electricity').addEventListener('click', () => {
//   const electricity = album.filter(albu => albu.dedicated.includes('1983') || albu.dedicated.includes('2016') || albu.dedicated.includes('2023'));
//   displayAlbum(electricity)
//   document.querySelector('.header h2').textContent = 'Electricity Gallery';
// })

// document.getElementById('menu').addEventListener('click', function() {

// });




document.getElementById('menu').addEventListener('click', function() {
  const nav = document.querySelector('nav');
  const main = document.querySelector('main'); // Selecciona el main
  nav.classList.toggle('open'); // Alternar la clase 'open' en nav
  this.classList.toggle('open'); // Alternar la clase 'open' en el botón de menú

  // Alternar la clase 'menu-open' en el main
  if (nav.classList.contains('open')) {
      main.classList.add('menu-open'); // Añadir padding si el menú está abierto
  } else {
      main.classList.remove('menu-open'); // Quitar padding si el menú está cerrado
  }
});

const card = document.querySelector('#card');

const album = [
  {
      albumName: "General Painting",
      dedicated: "1800, August, 7",
      area: 11500,
      imageUrl:"https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Sin-t%C3%ADtulo-1.jpg"
    },
    {
      albumName: "General Painting",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Servicio-de-Pintura-en-General1.jpg"
    },
    {
      albumName: "General Painting",
      location: "Payson, Utah, United States",
      dedicated: "1890, June, 7",
      area: 96630,
      imageUrl:
      "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Servicio-de-Pintura-en-Genera11.jpg"
    },
    {
      albumName: "General Plumbing",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Gasfiter%C3%ADa2.jpg"
    },
    {
      albumName: "General Plumbing",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Gasfiter%C3%ADa5.jpg"
    },
    {
      albumName: "General Plumbing",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Gasfiter%C3%ADa.jpg"
    },
    {
      albumName: "General Electricity",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Instalaci%C3%B3n-de-Electricidad3.jpg"
    },
    // Add more temple objects here...

    {
        albumName: "General Electricity",
        location: "Connectitud, United States",
        dedicated: "2016, November, 20",
        area: 9600,
        imageUrl:
        "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Instalaci%C3%B3n-de-Electricidad5.jpg"
       
      },
      {
        albumName: "General Electricity",
        location: "Helena Montana, United States",
        dedicated: "2023, June, 18",
        area: 116642,
        imageUrl:
        "https://www.fabriservicios.com.pe/wp-content/uploads/2019/09/Instalaci%C3%B3n-de-Electricidad.jpg"
      },
  ];


function displayAlbum(album) {
  card.innerHTML = ''; // Limpiar el contenido anterior
  album.forEach((element) => {
      const cardAlbum = document.createElement('div');
      cardAlbum.className = 'card-album';

      const nameAlbum = document.createElement('h2');
      nameAlbum.textContent = element.albumName;
      cardAlbum.appendChild(nameAlbum);

      const imageAlbum = document.createElement('img');
      imageAlbum.src = element.imageUrl;
      imageAlbum.alt = element.albumName; // Corrección aquí
      imageAlbum.loading = 'lazy';
      cardAlbum.appendChild(imageAlbum);

      card.appendChild(cardAlbum);
  });
}

displayAlbum(album);

// Manejo de eventos para los botones de filtro
document.querySelector('#allWorks').addEventListener('click', () => {
  displayAlbum(album); // Asegúrate de que displayTemples esté definido
  document.querySelector('.header h2').textContent = 'General Gallery';
});

document.querySelector('#painting').addEventListener('click', () => {
  const painting = album.filter(albu => albu.dedicated.includes('1800') || albu.dedicated.includes('1888') || albu.dedicated.includes('1890'));
  displayAlbum(painting);
  document.querySelector('.header h2').textContent = 'Painting Gallery';
});

document.querySelector('#plumbing').addEventListener('click', () => {
  const plumbing = album.filter(albu => (albu.dedicated.includes('2020') || albu.dedicated.includes('1974') || albu.dedicated.includes('1986')));
  displayAlbum(plumbing);
  document.querySelector('.header h2').textContent = 'Plumbing Gallery';
});

document.querySelector('#electricity').addEventListener('click', () => {
  const electricity = album.filter(albu => albu.dedicated.includes('1983') || albu.dedicated.includes('2016') || albu.dedicated.includes('2023'));
  displayAlbum(electricity);
  document.querySelector('.header h2').textContent = 'Electricity Gallery';
});

