document.addEventListener('DOMContentLoaded', () => {
  // Function to enable the Confirm Booking button if all fields are selected
  function validateInputs() {
    const route = document.getElementById('route').value;
    const busSize = document.getElementById('busSize').value;
    const busEvent = document.getElementById('busEvent').value;
    const time = document.getElementById('time').value;
    const busFacility = document.getElementById('busFacility').value;
    const confirmButton = document.getElementById('confirmBooking');

    // Enable the button only if all fields are selected
    confirmButton.disabled = !(route && busSize && busEvent && time && busFacility);
  }

  // Function to handle booking confirmation
  async function confirmBooking() {
    const route = document.getElementById('route').value;
    const busSize = document.getElementById('busSize').value;
    const busEvent = document.getElementById('busEvent').value;
    const time = document.getElementById('time').value;
    const busFacility = document.getElementById('busFacility').value;
    const errorMessage = document.getElementById('errorMessage');
    const resultMessage = document.getElementById('resultMessage');

   
    if (!route || !busSize || !busEvent || !time || !busFacility) {
      errorMessage.innerHTML = "Please select all options before confirming your booking.";
      errorMessage.style.display = 'block';
      resultMessage.style.display = 'none'; 
      return;
    }


    errorMessage.style.display = 'none'; 
    resultMessage.innerHTML = `Booking Confirmed!<br>Route: ${route}<br>Bus Size: ${busSize} Seater<br>Event: ${busEvent}<br>Time: ${time}<br>Facility: ${busFacility}<br>Have a Safe Journey!`;
    resultMessage.style.display = 'block';
  }

  // Attach event listeners
  document.querySelectorAll('select').forEach((select) => {
    select.addEventListener('change', validateInputs);
  });

  const confirmButton = document.getElementById('confirmBooking');
  confirmButton.addEventListener('click', confirmBooking);
});
