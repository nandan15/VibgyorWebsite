document.getElementById('chatForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value
  };

  fetch('https://localhost:7223/api/chat/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.ok ? response.text() : Promise.reject(response.statusText))
  .then(result => {
    document.getElementById('responseMsg').innerHTML = `<div class="alert alert-success">${result}</div>`;
    document.getElementById('chatForm').reset();
  })
  .catch(error => {
    document.getElementById('responseMsg').innerHTML = `<div class="alert alert-danger">Error: ${error}</div>`;
  });

  setTimeout(() => {
    var modal = bootstrap.Modal.getInstance(document.getElementById('chatModal'));
    modal.hide();
  }, 7000);
  
});