import React, { useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom';

const Disaplay = () => {
  
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
 
  return (
    <>
      <table class="table table-hover table-dark container w-75  ">
        <thead>
          <tr className='alert alert-primary'>
          <th scope="col">SR no.</th>
            <th scope="col">id</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PASSWORD</th>
          <th scope="col">UPDATE</th>
        <th scope="col">REMOVE</th>
          </tr>
        </thead>
        <tbody>

          {user.map((res,index)=>
              <tr className='alert alert-secondary' key={index}>
                <th scope="row">{index+1}</th>
                <th scope="row">{res.id}</th>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.password}</td>
                <NavLink to={`/update/${res.id}`} > <td ><a className='btn btn-primary' >Update</a></td></NavLink> 
                  <NavLink to={`/remove/${res.id}`} >  <td ><a className='btn btn-danger'>Remove</a></td></NavLink> 
              </tr>
          )}
          
          
        </tbody>
      </table>
    </>

  )
}

export default Disaplay