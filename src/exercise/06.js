// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // EC3
  const [username, setusername] = React.useState('');
  const handleChange = (event) => {
    const {value} = event.target;
    setusername(value.toLowerCase());
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // const username = event.target.elements.usernameInput.value;
    // console.log(event);
    // onSubmitUsername(username);
    onSubmitUsername(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" onChange={handleChange} value={username}/>
      </div>
      <button name="submitButton" type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
