<!-- search component -->
- search functionality
- keyword in search bar
- when searching it should fetch news articles from news api
- display articles on ui

- create component
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

<!-- submit forms -->
- user fills out form inputs inside modal
- on submit:
  - prevent default form behavior
  - collect form input values from state
  - call frontend api function

- frontend api call
  - create async function that sends post request to backend route
    - include input data with req.body as JSON
  - await response from backend
  - parse and return JSON respons

- verify token
  - store in localStorage
  - update isLoggedIn state in frontend
  - change Header to logged in state

<!------------ HANDLE REGISTER FLOW ------------>

<!-- REGISTER MODAL COMPONENT -->
- user enters name, email, and password into input fields
- on form submit:
  - prevent default browser behavior
  - collect values from input state
  - call onRegister({ name, email, password }) passed via props

<!-- APP COMPONENT -->
- define async function handleRegister taking name, email, password
- try:
  - call registerUser(name, email, password) and await response
  - destructure response into user and token
  - store token in localStorage with key 'jwt'
  - update user state with setUserData(user)
  - set isLoggedIn state to true
  - open success modal
- catch error:
  - log error to console
  - alert user with error message

<!-- FRONTEND API FUNCTION -->
- define async function registerUser taking name, email, password
  - send POST request to /users/register
    - set method to 'POST'
    - set headers to 'Content-Type: application/json'
    - set request body to JSON.stringify({ name, email, password })
  - if response is not ok:
    - parse error body and throw new Error
  - return parsed JSON containing user and token

<!-- BACKEND SETUP -->
- add app.use(express.json()) middleware to parse JSON request bodies

<!-- BACKEND ROUTE -->
- define POST route at /users/register
  - route handler points to registerUser controller

<!-- BACKEND CONTROLLER: registerUser -->
- define async function taking req and res
- extract name, email, password from req.body
- validate that all fields are present
  - if any missing, throw BadRequestError
- check if user already exists by email
  - if found, throw ConflictError
- hash password using bcrypt
- create new user in database with hashed password
- generate JWT token using user._id
- send response with status 201 and JSON containing the token and user data

<!-- AFTER SUCCESSFUL REGISTER (CLIENT SIDE) -->
- store received JWT in localStorage under 'jwt'
- update app state to reflect logged-in user
- update UI (e.g. Header) to show logged-in state
- navigate user to onboarding or dashboard view
