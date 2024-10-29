document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('contactFormData');
    if (storedData) {
        const formData = JSON.parse(storedData);
        console.log(formData);
        localStorage.removeItem('contactFormData');
    } else {
        document.getElementById('thankYouMessage').innerHTML = '<p>No se encontraron datos.</p>';
    }
});
