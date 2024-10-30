document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('contactFormData');
    if (storedData) {
        const formData = JSON.parse(storedData);
        console.log(formData); 

        const messageDisplay = formData.message ? `<p><strong>Mensaje:</strong> ${formData.message}</p>` : '';
        
        document.getElementById('thankYouMessage').innerHTML = `
            <h2>Gracias, ${formData.fname}!</h2>
            <p>Hemos recibido tu mensaje.</p>
            <p><strong>Nombre:</strong> ${formData.fname} ${formData.lname}</p>
            <p><strong>Teléfono:</strong> ${formData.phone}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${messageDisplay}
        `;
    } else {
        document.getElementById('thankYouMessage').innerHTML = '<p>No se encontraron datos.</p>';
    }
});