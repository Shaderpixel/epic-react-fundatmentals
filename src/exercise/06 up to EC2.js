// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // EC1
  const usernameRef = React.useRef(null);

  // EC2
  const [errorState, setErrorState] = React.useState(null);
  const handleChange = (event) => {
    const {value} = event.target;
    const isValid = value === value.toLowerCase();

    // console.log(event.target.form.elements.submitButton);
    // event.target.form.elements.submitButton.disabled = !isValid;
    setErrorState(isValid ? null : 'Username must be lower case');
    if (!isValid) {
      // alert(errorState);
      event.target.setAttribute('role','alert');
    } else {
      event.target.removeAttribute('role');
    }

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // const username = event.target.elements.usernameInput.value;
    // console.log(event);
    // onSubmitUsername(username);
    onSubmitUsername(usernameRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" ref={usernameRef} onChange={handleChange}/>
      </div>
      <div style={{color:"red"}}>{errorState}</div>
      <button name="submitButton" disabled={Boolean(errorState)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
