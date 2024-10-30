document.addEventListener('DOMContentLoaded', () => {
  const currentyear = document.querySelector('#currentyear');
  const today = new Date();
  currentyear.innerHTML = `&copy;<span class='highlight'>${today.getFullYear()} 🌺 Jerjes Mariluz Caciano 🌺 Lima</span>`;

  const lastModifiedDate = new Date(document.lastModified);
  const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
  };
  const formattedDate = lastModifiedDate.toLocaleString('en-US', options);
  document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;

  const products = [
      { id: "fc-1888", name: "flux capacitor" },
      { id: "fc-2050", name: "power laces" },
      { id: "fs-1987", name: "time circuits" },
      { id: "ac-2000", name: "low voltage reactor" },
      { id: "jj-1969", name: "warp equalizer" }
  ];
  
  const productSelect = document.querySelector('#nameSelect');
  if (productSelect) {
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.textContent = product.name;
          productSelect.appendChild(option);
      });
  }

  const reviewCountElement = document.getElementById('reviewCount');
  let reviewCount = 0;

  if (typeof(Storage) !== 'undefined') {
      reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
  }
  
  reviewCountElement.textContent = `Total Reviews: ${reviewCount}`;

  const form = document.getElementById('reviewForm');
  if (form) {
      form.addEventListener('submit', (event) => {
          event.preventDefault();

          const productName = productSelect.value;
          const overallRating = document.querySelector('input[name="overvall"]:checked')?.value || '';
          const installationDate = document.querySelector('#data').value;
          const features = Array.from(document.querySelectorAll('input[name="Features"]:checked')).map(el => el.value);
          const writtenReview = document.querySelector('#review').value;
          const yourName = document.querySelector('#fname').value;

          const reviewData = {
              productName,
              overallRating,
              installationDate,
              features,
              writtenReview,
              yourName
          };

          console.log('Review Data:', reviewData);

          localStorage.setItem('reviewData', JSON.stringify(reviewData));

          reviewCount += 1;
          localStorage.setItem('reviewCount', reviewCount);
          reviewCountElement.textContent = `Total Reviews: ${reviewCount}`;

          window.location.href = 'review.html';
      });
  }
});
