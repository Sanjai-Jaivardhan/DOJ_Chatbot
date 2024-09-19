// Get form and result elements
const form = document.getElementById('efilingForm');
const resultDisplay = document.getElementById('submissionResult');
const submitButton = document.getElementById('submitForm');

// Handle form submission
submitButton.onclick = function() {
    // Display the result content (mock content here)
    document.getElementById('resultContent').innerHTML = `
        <p><strong>Case Type:</strong> ${document.getElementById('caseType').value}</p>
        <p><strong>Case Details:</strong> ${document.getElementById('caseDetails').value}</p>
        <p><strong>File Uploaded:</strong> ${document.getElementById('fileUpload').files[0] ? document.getElementById('fileUpload').files[0].name : 'No file uploaded'}</p>
    `;
    
    // Show result display
    resultDisplay.classList.add('show');
};
