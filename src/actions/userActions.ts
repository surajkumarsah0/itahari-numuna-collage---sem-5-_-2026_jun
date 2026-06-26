'use server'

import { createUserInDB } from "@/services/userServices";

export async function registerUser(data: FormData) {
    const username = data.get('username')?.toString();
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();
    

    if (!username || !email || !password) {
        throw new Error('Missing required fields');
    }
    const newUser = {   
    username,
    email,
    password
  };
  //database call to create user
    await createUserInDB(newUser); 
    console.log('Registering user:', { username, email, password });

    // Return a success message or any other relevant information
    return { message: 'User registered successfully' };
}