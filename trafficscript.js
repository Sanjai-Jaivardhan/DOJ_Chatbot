// Get form and result elements
const form = document.getElementById('trafficFineForm');
const resultDisplay = document.getElementById('paymentResult');
const submitButton = document.getElementById('submitFine');

// Handle form submission
submitButton.onclick = function() {
    // Display the result content (mock content here)
    document.getElementById('resultContent').innerHTML = `
        <p><strong>Ticket Number:</strong> ${document.getElementById('ticketNumber').value}</p>
        <p><strong>Vehicle Number:</strong> ${document.getElementById('vehicleNumber').value}</p>
        <p><strong>Amount:</strong> ${document.getElementById('amount').value}</p>
    `;
    
    // Show result display
    resultDisplay.classList.add('show');
};
