
document.getElementById('btn-api').addEventListener('click', function() {
    alert('pressed')
    fetch('https://trybookai.com/api/generate-api-key', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        const apiKeyDisplay = document.getElementById('apiKeyDisplay');
        apiKeyDisplay.innerHTML = `Your API Key: <strong>${data.api_key}</strong>`;
        apiKeyDisplay.style.opacity = '0';
        setTimeout(() => {
            apiKeyDisplay.style.opacity = '1';
        }, 100);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('apiKeyDisplay').innerHTML = 'Error generating API key';
    });
});
