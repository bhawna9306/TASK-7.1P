import { async } from "@firebase/util";
import React ,{useState }from "react";
import {Link , useNavigate} from 'react-router-dom'
import './Sign.css'
import { emailandpass ,createUserDocFromAuth} from "./utils/firebase";


const Sign = (props)=>{
    const history = useNavigate()

const [contact, setContact] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',

})

const handleChange = (event)=>{
    const {name, value} = event.target
    setContact ((preValue)=>{  
    return {
    ...preValue,
    [name]: value
    }
    })
}

const {displayName , email ,password ,confirmPassword} = contact;

const submit =async (event) =>{
event.preventDefault();
if (password !== confirmPassword ){
    alert('PASSWORD DO NOT MATCH :(')
    return;
}
try{ const {user} = await emailandpass(email,password);
     await createUserDocFromAuth(user, {displayName});
     history("/login")
    

}
catch(error){
alert('SIGN-IN SUCCESSFULLY   :)' , error.message);
    
}



}



return(
<div className="sign">
<h1>Create a DEV@Deakin Account</h1>
<h3 style={{float:'left' ,width:"40%" , margin: "0px", marginBottom:"25px"}} >Name*</h3>
<input type="text" className="name" name="displayName"  value={contact.displayName} onChange={handleChange}></input>

<h3 style={{float:'left' ,width:"40%" , margin: "0px", marginBottom:"25px"}} >Email*</h3>
<input type="text" className="email" name="email" value={contact.email} onChange={handleChange}></input>

<h3 style={{float:'left' ,width:"40%" , margin: "0px", marginBottom:"25px"}}>Password*</h3>
<input type="password" className="password" name="password"  value={contact.password} onChange={handleChange}></input>

<h3 style={{float:'left' ,width:"40%" , margin: "0px", marginBottom:"25px"}}>Confirmed password*</h3>
<input type="password" className="passwords" name="confirmPassword"  value={contact.confirmPassword} onChange={handleChange}></input>



 <button className="create" style={{width:"100%" , marginTop:"20px"}} onClick={submit} type="primary"  >
 
     Create
   
     </button>
  


</div>
)
}

export default Sign