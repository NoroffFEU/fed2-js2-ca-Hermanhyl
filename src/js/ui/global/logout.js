import { onLogout } from "../auth/logout";

/**
 * Sets up an event listener for the logout button.
 * 
 * This function retrieves the logout button from the DOM by its ID and attaches
 * a click event listener that triggers the `onLogout` function when the button is clicked.
 * 
 * @function setLogoutListener
 * @returns {void}
 */

export function setLogoutListener() {
   const logoutButton = document.getElementById("logoutBtn");
   logoutButton.addEventListener("click", () => {
      onLogout();
   })
}
