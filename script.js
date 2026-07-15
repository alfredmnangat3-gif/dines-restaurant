// Handles the reservation form on the "Visit" section.
// Currently front-end only: it confirms the booking with a message
// instead of sending it anywhere. Connect this to email or a booking
// service once you're ready to accept real reservations.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservation-form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = form.querySelector('input[type="text"]');
    const name = nameInput ? nameInput.value.trim() : '';

    alert(
      name
        ? `Thanks, ${name} — we will confirm your reservation shortly.`
        : 'Thanks — we will confirm your reservation shortly.'
    );

    form.reset();
  });
});
