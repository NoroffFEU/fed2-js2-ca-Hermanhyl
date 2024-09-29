import {API_AUTH_REGISTER} from "../constants"
import { headers } from "../headers";


/**
 * Registers a new user by sending their information to the server.
 * 
 * This function sends a POST request to the registration API endpoint with the user's name, email, and password.
 * If registration is successful, it alerts the user and redirects to the login page.
 * If an error occurs, it displays an alert message.
 *
 * @async
 * @function register
 * @param {Object} params - The registration details.
 * @param {string} params.name - The user's name.
 * @param {string} params.email - The user's email address.
 * @param {string} params.password - The user's password.
 * @returns {Promise<void>} Resolves when the function completes.
 */

export async function register({
  name,
  email,
  password,
}) {
  const body = {
    name: name,
    email: email,
    password: password
  }
  try{
    const response = await fetch(API_AUTH_REGISTER,  {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(body),
    });
    if (response.ok) {
      alert(`sucsesfully registered "${name}"`);
      window.location.href = "/auth/login/";
    }
  } catch(Error){
    alert("something went wrong")
  }
}
