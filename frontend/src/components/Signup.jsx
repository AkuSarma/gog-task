import React from 'react';

const Signup = ({setReg}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>name:</label>
      <input type="text" name="name" required />
      <br />
      <label>email:</label>
      <input type="email" name="email" required />
      <br />
      <label>mobile:</label>
      <input type="number" name="mobile" required />
      <br />
      <label>Password:</label>
      <input type="password" name="password" required />
      <br />
      <button type="submit">Login</button>
      <button onClick={() => setReg(true)}>Go to login page</button>
    </form>
  );
}

export default Signup