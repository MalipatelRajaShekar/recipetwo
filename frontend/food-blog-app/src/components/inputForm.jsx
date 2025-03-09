// import React, { useState } from 'react'
// import axios from 'axios'

// export default function InputForm({setIsOpen}) {
//    const [email,setEmail]=useState("")
//    const [password,setPassword]=useState("")
//    const [isSignUp,setIsSignUp]=useState(false) 
//    const [error,setError]=useState("")

//   const handleOnSubmit=async(e)=>{
//     e.preventDefault()
//     let endpoint=(isSignUp) ? "signUp" : "login"
//     await axios.post(`http://localhost:5000/${endpoint}`,{email,password})
//     .then((res)=>{
//         localStorage.setItem("token",res.data.token)
//         localStorage.setItem("user",JSON.stringify(res.data.user))
//         setIsOpen()
//     })
//     .catch(data=>setError(data.response?.data?.error))
//   }

//   return (
//     <>
    
//         <form className='form' onSubmit={handleOnSubmit}>
//             <div className='form-control'>
//                 <label>Email</label>
//                 <input type="email" className='input' onChange={(e)=>setEmail(e.target.value)} required></input>
//             </div>
//             <div className='form-control'>
//                 <label>Password</label>
//                 <input type="password" className='input' onChange={(e)=>setPassword(e.target.value)} required></input>
//             </div>
//             <button type='submit'>{(isSignUp) ? "Sign Up": "Login"}</button><br></br>
//           { (error!="") && <h6 className='error'>{error}</h6>}<br></br>
//             <p onClick={()=>setIsSignUp(pre=>!pre)}>{(isSignUp) ? "Already have an account": "Create new account"}</p>
//         </form>
//     </>
//   )
// }

import React, { useState } from 'react';
import axios from 'axios';

export default function InputForm({ setIsOpen }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");

    const BASE_URL = "https://recipetwo-2.onrender.com"; // Deployment URL

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let endpoint = isSignUp ? "signup" : "login";

        try {
            const res = await axios.post(`${BASE_URL}/api/${endpoint}`, { email, password });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setIsOpen(false); // Close modal or form after successful login/signup
        } catch (err) {
            setError(err.response?.data?.error || "Something went wrong");
        }
    };

    return (
        <form className="form" onSubmit={handleOnSubmit}>
            <div className="form-control">
                <label>Email</label>
                <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
            {error && <h6 className="error">{error}</h6>}
            <p onClick={() => setIsSignUp((prev) => !prev)}>
                {isSignUp ? "Already have an account? Login" : "Create new account"}
            </p>
        </form>
    );
}
