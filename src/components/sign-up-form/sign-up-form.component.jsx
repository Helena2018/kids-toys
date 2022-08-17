import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onClick={() => {}}>
        <label>Display Name</label>
        <input type='text' required></input>

        <label>Email</label>
        <input type='email' required></input>

        <label>Password</label>
        <input type='password' required></input>

        <label>Confirm Password</label>
        <input type='password' required></input>

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
};

export default SignUpForm;