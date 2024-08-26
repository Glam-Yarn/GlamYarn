document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    fetch('https://formspree.io/f/your-form-id', { // Replace with your Formspree endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.location.href = 'thanks.html'; // Redirect to thank you page
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
