import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'



export const ContactForm = ()=>{

    const form = useRef()
    //const YOUR_SERVICE_ID = 'service_mljzmmj';
    //const YOUR_PUBLIC_KEY ='AwTaVdym4hvdA6xTf';
    //const YOUR_TEMPLATE_ID ='template_1385804';
    const submitForm=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_mljzmmj', 'template_1385804', form.current,'AwTaVdym4hvdA6xTf' ).then((result)=>console.log(result.text))
        
    }


    return(<form className="ContactForm" onSubmit={submitForm}  ref={form}>
    <label htmlFor="Name">Name</label>
    <input
      type="text"
      id="Name"
      placeholder="ivan@abv.bg"
      name="name"
    />
    <label htmlFor="email">Email</label>
    <input
      type="text"
      id="email"
      placeholder="ivan@abv.bg"
      name="email"
    />
    <label htmlFor="Message">Message</label>
    <textarea
    type="text"
      id="Message"
      
      name="Message"
    />
    <button>Submit</button>
  </form>)
}