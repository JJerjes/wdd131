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
            main.style.marginTop = '286px';
        }else {
            main.style.marginTop = '0';
        }
    });

});

const card = document.querySelector('#card');
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Hartford Connectitud",
        location: "Connectitud, United States",
        dedicated: "2016, November, 20",
        area: 9600,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/29bbbf0d7052177efc5cc22908d11aea43d52044/full/320%2C/0/default"
       
      },
      {
        templeName: "Helena Montana United States",
        location: "Helena Montana, United States",
        dedicated: "2023, June, 18",
        area: 116642,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/12b539bbeb6e11eda7c9eeeeac1eac0a8ada7139/full/320%2C/0/default"
      },
      {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 116642,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/b378c080e5880db5bf2bcf6d828b2f3fd59820de/full/320%2C/0/default"
      },
  ];

function displayTemples(temples) {
  card.innerHTML = '';
  temples.forEach((element) => {

    const cardTemple = document.createElement('div');
    cardTemple.className = 'card-temple';
  
    const nameTemple = document.createElement('h2');
    nameTemple.textContent = element.templeName;
    cardTemple.appendChild(nameTemple) 
  
    const locationTemple = document.createElement('p');
    locationTemple.textContent = `Location: ${element.location}`;
    cardTemple.appendChild(locationTemple);
  
    const dedicatedTemple = document.createElement('p');
    dedicatedTemple.textContent = `Dedicated: ${element.dedicated}`;
    cardTemple.appendChild(dedicatedTemple);
  
    const areaTemple = document.createElement('p');
    areaTemple.textContent = `Size: ${element.area} sq ft`;
    cardTemple.appendChild(areaTemple);
  
    const imageTemple = document.createElement('img');
    imageTemple.src = element.imageUrl;
    imageTemple.alt = element.nameTemple;
    imageTemple.loading = 'lazy';
    cardTemple.appendChild(imageTemple);
  
    card.appendChild(cardTemple);
      
  });
}

displayTemples(temples)

document.querySelector('#home').addEventListener('click', () => displayTemples(temples));
document.querySelector('.header h2').textContent = 'Home';

document.querySelector('#old').addEventListener('click', () => {
  const oldTemple = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  displayTemples(oldTemple);
  document.querySelector('.header h2').textContent = 'Old Temples';
});

document.querySelector('#new').addEventListener('click', () => {
  const newTemple = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  displayTemples(newTemple);
  document.querySelector('.header h2').textContent = 'New Temples';
});

document.querySelector('#large').addEventListener('click', () => {
  const largeTemple = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemple)
  document.querySelector('.header h2').textContent = 'Large Temples';
})


document.querySelector('#small').addEventListener('click', () => {
  const smallTemple = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemple);
  document.querySelector('.header h2').textContent = 'Small Temples';
})





