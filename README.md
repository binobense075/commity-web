# DevTinder

- S2E15
- Created a VITE + REACT application.
- Remove unnecessary code and create a Hello World.
- Install TailWind CSS
- Install daisy ui - Component design library, it is compatabile with tailwind
- Add NavBar component to App.jsx
- rafce
- Create a navbar seperate component file.
- Installed react router dom into our project
- Create BrowserRouter > Routes > Route = / Body > RouteChildren
- Create an Outlet in your Body Component
- Create a footer

- S2E16
- Create a login page
- Install axios
- CORS - install cors in backend => add middleware with configuration: origin , credentials: true
- In fronend wherever making api call with axios, pass {withCredentials: true}.
- If we don't pass, then authentication will fail, [it will not send the token back to the other api call]
- Install React Redux + @reduxjs/toolkit
- configureStore => Provider => createSlice => add reducer to store
- Login and check whethe the data is updated in the store.
- NavBar should be updated as soon as user logs in
- Refactor our code to add constants file + create a component folder

- S2E17
- You should not be able to access other routes without login.
- If token is not present redirect user to login page
- Logout
- Profile Page
