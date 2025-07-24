const baseUrl = 'http://localhost:3001/api'

export async function fetchNews(userInput) {
  const response = await fetch(`${baseUrl}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInput),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch News Articles')
  }

  return await response.json()
}

export async function registerUser(email, password, userName) {
  const response = await fetch(`${baseUrl}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, userName }),
  })

  if (!response.ok) {
    const errorBody = await response.json()
    throw new Error(errorBody.message || 'Failed to register')
  }

  return await response.json()
}

export async function loginUser(email, password) {
  const response = await fetch(`${baseUrl}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const errorBody = await response.json()
    throw new Error(errorBody.message || 'Failed to login')
  }

  return await response.json()
}
