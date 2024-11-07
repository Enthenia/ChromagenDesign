//function created to replace the content
function replaceContent() {
	//Variable declaration
	var myParticipantName;
	
	//setting the variable to the input field's id named participantNameInput's value
	myParticipantName = document.getElementById("participantNameInput").value;
	
	console.log('Variable myParticipantName: ' + myParticipantName);
	
	//setting the HTML code in the span id ParticipantNamePlaceholder with the variable 
	document.getElementById("participantNamePlaceholder").innerHTML = myParticipantName;
} 
