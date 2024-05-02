import React from 'react'
import SignUpForm from '../../components/signUp/SignUpForm'
import SignUpHeader from '../../components/signUpHeader/SignUpHeader'
import './signUp.css'

const SignUp = () => {
  return (
    <>
    <div className='background'>
    <SignUpHeader/>
    <SignUpForm/>
    </div>
    </>
  )
}

export default SignUp