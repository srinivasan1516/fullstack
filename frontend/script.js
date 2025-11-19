async function fetchMessage() {
try {
const res = await fetch('/api/message');
if (!res.ok) throw new Error('Network response not ok');
const data = await res.json();
document.getElementById('message').textContent = data.message || JSON.stringify(data);
} catch (err) {
document.getElementById('message').textContent = 'Error: ' + err.message;
}
}


window.addEventListener('DOMContentLoaded', () => {
fetchMessage();
document.getElementById('refresh').addEventListener('click', fetchMessage);
});