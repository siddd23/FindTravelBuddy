import React from 'react'
import styles from "./Contact.module.css"
import Button from '../Button/Button'
import Navigation  from '../Navigation'
import Footer from '../Footer'

const ContactForm = () => {

  const OnSubmit=(event) =>{
      event.preventDefault();
      console.log(event);
  }
  return (
   
   <section className={`${styles.container} ${styles.backgroundImage}`}>
      <div><Navigation/> </div> 
    <div className={styles.contact_form}>
    <h1>
            CONTACT US
        </h1>
        <div className={styles.separator}></div>
        <div className={styles.top_btn}>
        
        <Button text="VIA SUPPORT CHAT" />
        <Button text="VIA CALL" />
        </div>
        <Button  
        isOutline={true}
        text="VIA EMAIL FORM" />
        <form OnSubmit={OnSubmit}>
            <div className={styles.form_control}>
               <label htmlFor="name">Name</label>
               <input type="text" name="name"/>
            </div>
            <div className={styles.form_control}>
               <label htmlFor="email">Email</label>
               <input type="email" name="email"/>
            </div>
            <div className={styles.form_control}>
               <label htmlFor="text">Text</label>
               <textarea name="email" rows={8}/>
            </div>
              <div style={{
                display:'flex',
                justifyContent:'end'
              }}>
              <Button 
            
              text="SUBMIT BUTTON" />
              
              </div>
        </form>
    </div>
    <div className='footer-section'><Footer/></div>
   </section>
  
  )
}

export default ContactForm