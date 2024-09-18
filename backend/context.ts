export async function createContext() {
  // No req or res objects available in the standalone server

  // Get user information (if needed) - you'll need to implement your authentication logic
  const user = { name: 'anonymous' }

  return {
    user,
    // Add other properties to the context as needed
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
