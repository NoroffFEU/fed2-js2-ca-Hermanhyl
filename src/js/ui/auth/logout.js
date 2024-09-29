    
/**
 * Logs the user out of the application.
 * 
 * This function removes the user's authentication token and any stored post ID from
 * local storage, alerts the user that they have been logged out, and redirects them
 * to the login page.
 * 
 * @function onLogout
 * @returns {void}
 */

export function onLogout() {    
    localStorage.removeItem("postId")
    localStorage.removeItem("token");
    alert("Logged out");
    window.location.href = "/auth/login/";
}
  
