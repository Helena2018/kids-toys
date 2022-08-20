import { useState } from 'react';

import  { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
 } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import './sign-in-form.style.scss';
import Button from '../button/button.component';


const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
};

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();

    } catch(error) {
     
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields( {...formFields, [name]: value})
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onClick={handleSubmit}>

        <FormInput
          label='Email' 
          type='email' 
          required
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput 
          label='Password'
          type='password' 
          required
          name='password'
          value={password}
          onChange={handleChange}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button onClick={SignInWithGoogle} buttonType='google' type='submit'>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
};

export default SignInForm;