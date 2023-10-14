import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';


function Signup() {

const [values, setValues] = useState ({
    nom: '',
    email:'',
    password: ''
})

const navigate = useNavigate();
const [errors, setErrors] = useState({})
const handleInput = (event) =>  {
    setValues (prev => ({...prev, [event.target.nom]: [event.target.value]}))
}
const handleSubmit= (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.nom ==="" && errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/signup', values)

      .then(res => {
          navigate('/');
      })
      .catch(err => console.log(err));
    }
  }

  return (

     <div className= 'd-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className= 'bg-white p-3 rounded w-25'>
              <h2>Sign-Up</h2>
                <form action ="" onSubmit = {handleSubmit}>
                    <div className= 'mb-3'>
                        <label htmlFor = "nom"> <strong> Nom </strong> </label>
                        <input type = "text" placeholder = 'Tapez votre Nom' nom ='nom'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nom && <span className = 'text-danger'> {errors.nom} </span> }
                    </div>
                    <div className= 'mb-3'>
                        <label htmlFor = "email"> <strong> Email </strong> </label>
                        <input type = "email" placeholder = 'Tapez votre email' nom ='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className = 'text-danger'> {errors.email} </span> }
                    </div>
                    <div className= 'mb-3'>
                        <label htmlFor = "password"> <strong> Password </strong> </label>
                        <input type = "password" placeholder = 'Tapez votre password' nom ='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className = 'text-danger'> {errors.password} </span> }
                    </div>
                        <button type = 'submit' className = 'btn btn-success w-100 rounded-0'> Sign UP </button>
                        <p> Vous Acceptez Nos Conditions et Politiques de Securité </p>
                        <Link to="/" className = 'btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Login </Link>
                </form>
            </div>
        </div>
        
  )}


export default Signup