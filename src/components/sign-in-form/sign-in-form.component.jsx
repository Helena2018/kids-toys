import { useState, useContext } from 'react';

import { UserContext } from '../../contexts/user.context';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import  { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
 } from '../../utils/firebase/firebase.utils';


import './sign-in-form.style.scss';



const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
};

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);

      resetFormFields();

    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break;
      }
      resetFormFields();
      // if(error.code === 'auth/wrong-password') {
      //   alert('Sorry, password is not correct!')
      //   resetFormFields();
      // } else if(error.code === 'auth/user-not-found') {
      //   alert('User is not exist')
      //   }
      console.log(error)
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
      <form onSubmit={handleSubmit}>
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
          <Button onClick={signInWithGoogle} buttonType='google' type='button'>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
};

export default SignInForm;