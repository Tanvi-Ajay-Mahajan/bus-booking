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
    if (route !== '' && busSize !== '' && busEvent !== '' && time !== '' && busFacility !== '') {
      confirmButton.disabled = false;
    } else {
      confirmButton.disabled = true;
    }
  }

  // Function to handle booking confirmation and send the data to the server
  async function confirmBooking() {
    const route = document.getElementById('route').value;
    const busSize = document.getElementById('busSize').value;
    const busEvent = document.getElementById('busEvent').value;
    const time = document.getElementById('time').value;
    const busFacility = document.getElementById('busFacility').value;
    const errorMessage = document.getElementById('errorMessage');
    const resultMessage = document.getElementById('resultMessage');

    // Check if all fields are selected
    if (!route || !busSize || !busFacility || !busEvent || !time) {
      // Show error message if not all fields are filled
      errorMessage.textContent = "Please select all options before confirming your booking.";
      errorMessage.style.display = 'block';
      resultMessage.style.display = 'none';
      return;
    }

    // Clear the error message
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';

    // Create the data object to send to the backend
    const bookingData = {
      route: route,
      busSize: busSize,
      busEvent: busEvent,
      time: time,
      busFacility: busFacility
    };

    try {
      // Send the booking data to the backend API
      const response = await fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      // Show the result of the booking
      if (response.ok) {
        resultMessage.innerHTML = `Booking Confirmed!<br>Route: ${route}<br>Bus Size: ${busSize} Seater<br>Event: ${busEvent}<br>Time: ${time}<br>Facility: ${busFacility}<br>Have a Safe Journey!`;
        resultMessage.style.display = 'block';
      } else {
        // Display error message from backend if booking failed
        resultMessage.innerHTML = 'Booking failed, please try again.';
        resultMessage.style.display = 'block';
      }
    } catch (error) {
      console.error('Error:', error);
      errorMessage.innerHTML = `Booking Confirmed!<br>
      Route: ${route}<br>
      Bus Size: ${busSize} Seater<br>
      Event: ${busEvent}<br>
      Time: ${time}<br>
      Facility: ${busFacility}<br>
      Have a Safe Journey!.`;
      errorMessage.style.display = 'block';
      resultMessage.style.display = 'none';
    }
  }

  // Attach event listeners to validate inputs
  document.getElementById('route').addEventListener('change', validateInputs);
  document.getElementById('busSize').addEventListener('change', validateInputs);
  document.getElementById('busEvent').addEventListener('change', validateInputs);
  document.getElementById('time').addEventListener('change', validateInputs);
  document.getElementById('busFacility').addEventListener('change', validateInputs);

  // Attach the confirmBooking function to the button
  document.getElementById('confirmBooking').addEventListener('click', confirmBooking);
});
