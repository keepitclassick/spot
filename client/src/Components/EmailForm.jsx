// import { useState } from "react";
import "./EmailForm.scss";
// import axios from "axios";

export default function EmailForm() {

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")
  // const [sent, setSent] = useState .. sent:false?
  //props + setState => handleName, handleEmail, handleMessagr
  //add value and onChange for name, email, message

  //formSubmit =>event preventDefault => send data(name, email, message)
  //axios post request to backend (useEffect) => set sent to true and reset form

// const resetForm = () => {
  //setState
//   name: '',
//   email: '',
//   message: ''
// }
  return (
    <div className="container">
      <form>
      {/* single item */}
       <div className="single-item">
         <label htmlFor="name">Name</label>
         <input type="text" name="name"
         className="name" placeholder="Your name"

         />
       </div>
       {/* end of single item */}
       <div className="single-item">
         <label htmlFor="email">Email</label>
         <input type="text" name="email"
         className="name" placeholder="Your email" />
       </div>

       <div className="text-area single-item">
         <label htmlFor="message">Message</label>
    <textarea name="message" id=""
    cols="30" rows="5" placeholder="What would you like to say?"></textarea>
       </div>

<div className="msg">Message has been sent</div>
       <div className="btn">
         <button type="submit">Send Email</button>
         
       </div>
      </form>
    </div>
  )
}