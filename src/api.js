const baseUrl = 'http://localhost:3001/api'

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

export async function getUser(token) {
  const response = await fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorBody = await response.json()
    throw new Error(errorBody.message || 'Failed to login')
  }

  return await response.json()
}

export async function searchNews(userInput) {
  const response = await fetch(`${baseUrl}/articles?q=${userInput}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch News Articles')
  }

  return await response.json()
}

export async function saveArticles(articleData) {
  const token = localStorage.getItem('jwt')
  const response = await fetch(`${baseUrl}/articles/saved-news`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(articleData),
  })

  if (!response.ok) {
    throw new Error('Failed to save article')
  }

  return await response.json()
}

export async function getSavedArticles() {
  const token = localStorage.getItem('jwt')
  const response = await fetch(`${baseUrl}/articles/saved-news`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch News Articles')
  }

  return await response.json()
}

export async function deleteArticle(articleId) {
  const token = localStorage.getItem('jwt')
  const response = await fetch(`${baseUrl}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to delete News Article')
  }

  return await response.json()
}
