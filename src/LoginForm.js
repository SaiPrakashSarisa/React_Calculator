import React, {useState} from 'react';

const LoginForm = () => {

  const [name, setName] = useState('');
  return (
    <>
      <form>
        <label htmlFor="name">User Name </label>
        <br />
        <input type="text" id="name" />
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <br />
        <input type="password" id="password" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
