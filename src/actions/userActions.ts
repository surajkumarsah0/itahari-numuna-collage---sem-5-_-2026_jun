'use server'

export async function registerUser(data: FormData) {
    const username = data.get('username')?.toString();
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    if (!username || !email || !password) {
        throw new Error('Missing required fields');
    }

    // Perform registration logic here (e.g., save to database)
    // For demonstration purposes, we'll just log the data
    console.log('Registering user:', { username, email, password });

    // Return a success message or any other relevant information
    return { message: 'User registered successfully' };
}