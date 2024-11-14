import React from 'react'

const Login = ({ setReg }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>email:</label>
      <input type="email" name="email" required />
      <br />
      <label>Password:</label>
      <input type="password" name="password" required />
      <br />
      <button type="submit">Login</button>
      <button onClick={() => setReg(false)}>Go to signup page</button>
    </form>
  );
};

export default Login