/* The script to dynamically update the invitation */

// This function is invoked when the page is fully loaded
window.onload = init;

function init() {
    const submit = document.getElementById("submit");

    // When the user clicks the submit button
    submit.onclick = function () {
        const name = document.getElementById("participantName").value;
        const sponsername = document.getElementById("sponserName").value;

        // Update the placeholders with user input
        document.getElementById("participantNamePlaceholder").innerText = name;
        document.getElementById("outputsponserNamePlaceholder").innerText = sponsername;
    };
}
} 
