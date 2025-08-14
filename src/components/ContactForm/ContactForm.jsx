import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import {MdMessage} from 'react-icons/md'
import { MdLocalPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';


const ContactForm = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [text,setText]=useState("");
const onSubmit=(event)=>{
  event.preventDefault();
    //name=event.target[0].value;
  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);
  console.log({
    name,
    email,
    text,
});
}
return (
 <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text="Via Support Chat" icon={<MdMessage  fontSize="24px"/>}/>  
        <Button
          text="Via Call"
          icon={<MdLocalPhone  fontSize="24px"/>}/>
      </div>
        <Button
          isOutline={true}
          text="Via Email form" icon={<HiMail  fontSize="24px"/>}/>
        <form
              onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='name'/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor='text'>Text</label>
            <textarea  name='text' rows="8"/>
          </div>
          <div style={{
            display:'flex',
            justifyContent:'end'
            }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {name + "" + email + "" + text}
          </div>
        </form>
   </div>
        <div className={styles.contact_images}>
          <img src='/images/service.png'/>
        </div>

  </section>
)
}
export default ContactForm
