import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Update = () => {
    const [user, setuser] = useState([]);
    // const [message, setMessage] = useState('');
            
    useEffect(() => {
      loaduser();
    }, []);
    
      const loaduser = async () => {
            const result = await fetch('http://localhost/react%20practice/new-paper/signup.php');
            const result1=await result.json();
            setuser(result1);
         
        }
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    
        const [message, setMessage] = useState(null);
        const [messageType, setMessageType] = useState('');
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(values => ({
                ...values,
                [name]: value
            }));
        };
    
        const handleSubmit = async (e) => {
            // e.preventDefault();
    
            // Validate form data
            if (formData.password !== formData.confirmPassword) {
                setMessageType('danger');
                setMessage("Passwords do not match.");
                return;
            } else {
                const formsdata = { name: formData.name, email: formData.email, password: formData.password };
                const resultdata = await axios.post('http://localhost/react%20practice/new-paper/signup.php', formsdata);
                if (resultdata.data.success) {
                    setMessage(resultdata.data.success);
    
                    // Simulate form submission
                    setTimeout(() => {
                        setMessage("Signup successful!");
                    }, 1000);
                }
            }
    
    
        };
  return (
    <>
         <div className=" signin container">
            <h2>Signup for a New Channel</h2>
            {user.map((res,index)=>
              <form onSubmit={handleSubmit}  key={index}>
                <input type="text" hidden placeholder={res.id} />
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={res.name}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={res.email}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder={res.password}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
                {message && (
                    <div className={`alert alert-${messageType}`}>
                        {message}
                    </div>
                )}
            </form>
            )}
          
        </div>
    </>
  )
}

export default Update