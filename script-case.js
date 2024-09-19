// JavaScript for Case Tracking Form
document.getElementById('caseTrackingForm').onsubmit = function(event) {
    event.preventDefault();

    // Collect form data
    var caseType = document.getElementById('caseType').value;
    var caseNumber = document.getElementById('caseNumber').value;
    var petitionerName = document.getElementById('petitionerName').value;

    // Create fake case details
    var caseDetails = `
        <strong>Case Type:</strong> ${caseType} <br>
        <strong>Case Number:</strong> ${caseNumber} <br>
        <strong>Petitioner Name:</strong> ${petitionerName} <br>
        <strong>Status:</strong> Case is under review. <br>
        <strong>Next Hearing Date:</strong> 2024-10-01 <br>
        <strong>Details:</strong> Your case is currently in the preliminary review stage. Further updates will be provided once available.
    `;

    // Display case details
    var caseDetailsDiv = document.getElementById('caseDetails');
    document.getElementById('caseContent').innerHTML = caseDetails;
    caseDetailsDiv.style.display = 'block';
};

// Start animation after 3 seconds
window.onload = function() {
    setTimeout(() => {
        document.querySelector('.case-types-container').style.animationPlayState = 'running';
    }, 3000); // Start animation after 3 seconds
};
