document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('responseMessage').textContent = data;
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('responseMessage').textContent = 'Произошла ошибка при отправке.';
    });
});