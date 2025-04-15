document.getElementById('chatForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const data = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value
    };

    try {
      const response = await fetch('https://your-backend-url.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      document.getElementById('responseMsg').innerHTML = `<div class="alert alert-success">${result.message}</div>`;
      document.getElementById('chatForm').reset();
    } catch (error) {
      document.getElementById('responseMsg').innerHTML = `<div class="alert alert-danger">Failed to send. Try again!</div>`;
    }
  });