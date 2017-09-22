/**
 * This file contains the entry point for the gwc app project code. The initialization of
 * the Cordova App is a bit complex, and has been configured to point to the main function
 * in this file.  This lowers the leraning curev for our students.
 *
 * @author lestarch (Michael Starch)
 */
/**
 * Main function entry point for GWC project code. This function runs after the app has 
 * been initialized and all resources are prepared for execution.  It is passed the 
 * "app" object from cordova in case that is needed.
 * @param app - Cordova app object
 */
function main(app)
{
    //Start your GWC code here
    var button = document.getElementById("change-button");
    //Set a function to call on a click of the button
    button.onclick = change;
}
/**
 * Changes the text of the paragraph with id "paragraph-1"
 */
function change()
{
    document.getElementById("paragraph-1").innerHTML = "This is new text";
}
