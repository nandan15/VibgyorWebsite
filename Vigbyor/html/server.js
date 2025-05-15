document.getElementById('send-contact').addEventListener('click', function () {
  const data = {
    name: document.getElementById('name-contact').value,
    email: document.getElementById('email-contact').value,
    phone: document.getElementById('number-contact').value,
    property: document.getElementById('property-contact').value,
    requirements: Array.from(document.querySelectorAll('.requirement-checkbox:checked')).map(checkbox => checkbox.value)
  };
  if (data.requirements.length === 0) {
    document.getElementById('responseMsg').innerHTML = `<div class="alert alert-danger mt-3">Please select at least one requirement.</div>`;
    return;
  }
  const apiUrl = window.location.hostname === 'localhost'? 'https://localhost:7223/api/chat/submit': '/api/chat/submit';
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.ok ? response.text() : Promise.reject(response.statusText))
  .then(result => {
    document.getElementById('responseMsg').innerHTML = `<div class="alert alert-success mt-3">${result}</div>`;
    document.getElementById('form-contact1').reset();
  })
  .catch(error => {
    document.getElementById('responseMsg').innerHTML = `<div class="alert alert-danger mt-3">Error: ${error}</div>`;
  });
});