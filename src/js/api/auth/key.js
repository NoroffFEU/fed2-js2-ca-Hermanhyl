import {API_AUTH_KEY, } from "../constants"

 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQnJvciIsImVtYWlsIjoiYnJvckBzdHVkLm5vcm9mZi5ubyIsImlhdCI6MTcyNjU2OTgwMH0.mqi8G2Qazu-ywTqJcdToHuFz98i6v14LPcKd0s5BFyw"

/**
 * Requests an authentication key from the server.
 * 
 * This function sends a POST request to the authentication API to retrieve a key.
 * It includes a token in the Authorization header and a request body with a key name ("TestKey").
 * If the request is successful, it returns the response data. If the request fails, an error is logged and thrown.
 * 
 * @async
 * @function getKey
 * @returns {Promise<Object>} The response data containing the key.
 * @throws {Error} If the key registration fails.
 */

export async function getKey() {

    const response = await fetch(API_AUTH_KEY, {
        method: `POST`,
        headers: { 
            "Content-Type": "application/json" ,
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name: "TestKey",
        })
    });
    
    if (response.ok) {
        return await response.json();
    }

    console.error(await response.json());
    throw new Error("Could not register for key!")
}

getKey().then(console.log)

