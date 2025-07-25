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
- update states with onChange function taking the event and targeting the event value
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




<!------------ HANDLE LOGIN FLOW ------------>
<!-- controller -->
- define login async function
- extract email and password from req.body
- validate inputs
- find user by email
- catch error
- compare provided password to hashed password using bycrpt.compare
- generate jwt token using jwt.sign with user _id and jwt secret key
- respond with status and json
- catch errors

<!-- backend routes -->
- create /login route
- route to login controller

<!-- frontend api  -->
- define loginUser async function
- await the fetch to /users/login
- post
- method content type application json
- send request as json.stringify
- return parsed json
- catch errors

<!-- app -->
- define async handleLogin function taking in email and password
- try
  - call loginUser function and await response
  - destructure user, token from response
  - store jwt token in local storage with 'jwt' key
  - update userData state with user info
  - setLogged in to true
  - close modal and navigate to protected route
  - catch error
  - pass function to modal as prop

<!-- modal -->
- user inputs data in input fields
  - onChange targets the events target value
  - updates state
- pass onLogin function from frontend api as prop
- on form submit
  - prevent default behavior
  - extracts state data
  - call onLogin api function and pass data as props
  - error handle
- pass handleSubmit as prop to modal with form




<!--------- GET ARTICLES FLOW ------------>
- custom backend fetch to news api to hide api key

<!-- article model -->
- check api documentation
- grab any needed data points
- import mongoose with require
- create new mongoose schema
- type and required if applicable to all relevant data points
- module.exports the mongoose model with its name as string and function

<!-- controller -->
- create async function named getNewsArticles that takes in a req, res, next params
- extract the key word with req.query
- validate query input
- call news api using fetch and api key
- await and parse response
- res with status and json
- catch errors

<!-- route -->
- create article route in index.js
- use '/' and route to getNewsArticles controller

<!-- frontend api -->
- create a fetchNews function
- await fetch to '/articles/keyword'
- create POST method
- send request with JSON stringify
- return parsed json
- catch errors

<!-- app -->
- define handleSearch function that takes in userInput
- call fetchNews api function and await response
- destructure articles from response
- update articles state
- catch errors
- add showResults state (default false)
- after setting articles in handleSearch:
  - set showResults to true

- articles state is passed to SearchResults component

<!-- search -->
- user inputs keyword
- onChange e => e.target.value
- updates state
- on form submit
  - prevent default behavior
  - extract search keyword from state
  - call handleSearch from app and input updated state
  - clear input field

<!-- search results -->
- receive articles and showResults as prop
- iterate over articles array using map
- pass articles and index as props to map
- add showMore state (default false)
- if showMore is false
  - slice articles to 3
- else
  - show full list
- on 'Show more' button click
  - toggle showMore to true





<!------------ HANDLE SAVE NEWS FLOW ------------>
