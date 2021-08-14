import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setMessage(true);
    emailjs.sendForm('service_67olw5a', 'template_uhs2uyp', e.target, 'user_ZBIhxVbq6TsXbY98uVjZb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" required/>
          <input type="email" placeholder="Email"  name="email" required/>
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
