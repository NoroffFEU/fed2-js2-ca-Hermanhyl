import { login } from "../../api/auth/login";

/**
 * Handles the login form submission event.
 * 
 * This asynchronous function prevents the default form submission behavior,
 * retrieves the email and password from the form data, and calls the `login` function
 * with the extracted login credentials.
 * 
 * @async
 * @function onLogin
 * @param {Event} event - The event object representing the form submission event.
 * @returns {Promise<void>} Resolves when the login process is initiated.
 * @throws {Error} If an error occurs during the login process.
 */

export async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const loginData = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    login(loginData);
}
