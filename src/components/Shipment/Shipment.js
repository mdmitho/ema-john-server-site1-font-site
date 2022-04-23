import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
 
const handleNameBlur = event=>{
    setName(event.target.value)
}

    const handleAddressdBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhonedBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
      const shipping = {name, email, address,phone}
      console.log(shipping);
        
        
    }



    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Shipping INformation</h2>
            <form onSubmit={handleCreateUser}>
                 <div className="input-group">
                    <label htmlFor="email">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                </div>
                 <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Address</label>
                    <input onBlur={handleAddressdBlur} type="text" name="Address" id=""  required/>
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number </label>
                    <input onBlur={handlePhonedBlur} type="text" name="phone-number" id="" required />
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Add Shipping"/>
            </form>
        </div>
    </div>
    );
};

export default Shipment;