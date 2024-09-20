import {API_AUTH_KEY, } from "../constants"

 export const getAuthToken = () => {
     const accessToken = localStorage.getItem('token');
     return accessToken;
 };

 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQnJvciIsImVtYWlsIjoiYnJvckBzdHVkLm5vcm9mZi5ubyIsImlhdCI6MTcyNjU2OTgwMH0.mqi8G2Qazu-ywTqJcdToHuFz98i6v14LPcKd0s5BFyw"

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

