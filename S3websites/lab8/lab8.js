// initialize the counter and the array
var numbernames=0;
var names = new Array();
function AddInfo() {
   // Get the name from the text field
   thename=document.theform.newname.value;
   // Add the name to the array
   names[numbernames]=thename;
   // Increment the counter
   numbernames++;
   // This is to reset the text area.
   if (numbernames%5 == 0) {
      // Text area message
     document.theform.textarea.value = "\t\tOutput will appear here.";
      // Button label changed
     document.theform.addname.value = "Add First Name";
   }
   if (numbernames%5 == 1) {
	  document.theform.textarea.value = "First Name: " + names[numbernames-1];
     document.theform.addname.value = "Add Last Name";
   }
   if (numbernames%5 == 2) {
	  document.theform.textarea.value +="\nLast Name: " + names[numbernames-1];
     document.theform.addname.value = "Add CRN";
   }
   if (numbernames%5 == 3) {
	  document.theform.textarea.value +="\nCRN: " + names[numbernames-1];
     document.theform.addname.value = "Add Professor's Name";
   }
   if (numbernames%5 == 4) {
      // Allow user to start over entering information
	  document.theform.textarea.value +="\nProfessor's Name: " +names[numbernames-1];
     document.theform.addname.value = "Click here to reset the text area";
   }
}
