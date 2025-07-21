const baseUrl = 'https://localhost:3001/api'

export async function fetchNews(userInput){
    const response = await fetch(`${baseUrl}/news`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInput)
    })

    if (!response.ok) {
        throw new Error('Failed to fetch News Articles')
    }

    return await response.json()
}
