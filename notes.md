<!-- search component -->
- search functionality
- keyword in search bar
- when searching it should fetch news articles from news api
- display articles on ui

1. create files
- jsx css
- api.js file
2. create component
   - use a peice of state
     - search input (userInput)
       - ''

    - submitHandler function
      - e param
      - e.preventDefault
      - call api function
      - clear searchbar

  - form.searchbar
    - onSubmit call the handleSubmit
  - input value-userInput type-text placeholder onChange-e.target.value-setUserInput
  - button
    - type-submit



- api fetch
  - async function fetchNews that takes userInput as a param
  - create response variable with baseUrl and proper endpoint
  - that response will await the fetch to the correct route
  - get request method
  - headers
    - content-type application/json
    - bearer: token (not needed)
  - body
    - json stringify userInput

    - throw error if no response

  - return json

