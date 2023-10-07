import React, { useState } from 'react'
import '../styles/signup.css'
import { auth } from '../configs/firebase';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    //const currentUser = auth.currentUser.email;

    const handleSignup = async (e) => {
      try{
        e.preventDefault();
        const submitDetails = await createUserWithEmailAndPassword(auth, email, password);
        console.log(submitDetails);
        setEmail("");
        setPassword("");
        navigate("/");
      }catch(err){
        console.error(err)
      }
    }


    //console.log(auth.currentUser.email);

  return (
    <div className='signupcontainer'>
        <form className='signupcontent'>
            <h3><strong>Create An Account</strong></h3>
            <section className='signupinput'>
                <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </section>
            <button onClick={(e)=>handleSignup(e)}><strong>Create Account</strong></button>
        </form>
    </div>
  )
}

export default SignUp