import React from "react";
import Form from 'react-bootstrap/Form';
import "./style.css";
// import Button from 'react-bootstrap/Button';
// import Hero from '../../components/hero.js';
// import Content from '../../components/content.js';

function Contact() {

    return (

   <section id="contact">

      <div className="row section-head">

         <div className="two columns header-col">

            <h1><span>Get In Touch.</span></h1>

         </div>

         <div className="ten columns">

            <p className="lead"></p>

         </div>

      </div>

<div className="row">
   <div className="eight columns">

      <Form action="" method="post" id="contactForm" name="contactForm">
      <fieldset>

         <div>
            <label htmlFor="contactName">Name <span className="required">*</span></label>
            <input type="text" defaultValue="" size="35" id="contactName" name="contactName" />
         </div>

         <div>
            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
            <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
         </div>

         <div>
            <label htmlFor="contactSubject">Subject</label>
            <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
         </div>

         <div>
            <label htmlFor="contactMessage">Message <span className="required">*</span></label>
            <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
         </div>

         <div>
            <button className="submit">Submit</button>
            <span id="image-loader">
               <img alt="" src="images/loader.gif" />
            </span>
         </div>
      </fieldset>
      </Form>

  <div id="message-warning"> Error </div>
      <div id="message-success">
         <i className="fa fa-check"></i>Your message was sent, thank you!<br />
      </div>
  </div>


   <aside className="four columns footer-widgets">
      <div className="widget widget_contact">

         <h4>Address and Phone</h4>
         <p className="address">
            <br />
           <br />
           <br />
            <span></span>
         </p>
      </div>
   </aside>
</div>
</section> 
        );
    }

export default Contact;
