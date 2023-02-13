// functions to intereact with the user : alert , prompt, and confirm

/*

    1) alert() - shows a message
    2) prompt() - shows a message, input text. it returns the text on ok or , if cancel 
        button or Esc is clicked, null.

    3) Confirm() - shows a message, confirm with "ok" or "cancel". It returns
    true for Ok and false for Cancel/Esc.

*/

// Note : All these pause script execution and don't allow the visitor to interact
//        with the rest of the page until the window has been dismissed.


// ALERT
alert('Welcome !');


// PROMPT
let age = prompt('Enter a age');
if(age)
    document.write('Your age is : ' , age);
else
    document.write('its an blank');

    
// CONFIRM 
let response = confirm('Are you sure ?')
if(response)
    document.write("Confirmed");
else
    document.write("Not confirmed");