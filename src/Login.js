import React, { useState } from 'react';
import './Login.css';
import { login } from '../src/features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  const register = () => {
    if (!name) {
      alert('Please enter your name');
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        if (userAuth) {
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: profilePic,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoURL: profilePic,
                })
              );
            });
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img src="linkedinlogo2.png" alt=""></img>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
        ></input>
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile Pic Url"
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        ></input>
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a Member?
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
