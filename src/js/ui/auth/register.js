import { register } from "../../api/auth/register";

/**
 * Handles the registration form submission event.
 * 
 * This asynchronous function prevents the default form submission behavior,
 * retrieves the user's name, email, and password from the form data, and calls the
 * `register` function with the extracted registration details.
 * 
 * @async
 * @function onRegister
 * @param {Event} event - The event object representing the form submission event.
 * @returns {Promise<void>} Resolves when the registration process is initiated.
 * @throws {Error} If an error occurs during the registration process.
 */

export async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    
    const registerData = {
        name:  formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password")
    };

    register(registerData)
}   
