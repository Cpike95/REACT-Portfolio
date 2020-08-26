import React, {useState} from "react";
import resume from "../../resumeData.json";
import {  FaGithub, FaLinkedin  } from "react-icons/fa";

import "./style.css"
function About() {
  const profile = useState(resume);
  
  return (
    <section id="about">
      <h2>About Me</h2>
      <div backgroundimage=""></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
                  <div className="card">
                    <div className="image">
            <div className="three columns">
              <img className="profile-pic"  src={profile[0].main.image}  />
            </div>
            <div className="nine columns main-col">
              <div className="card-inner">
                      <div className="header">
                        <h4 className="card-text"></h4>
                      </div>

              <p id="mainbio">{profile[0].main.bio}</p>
            
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <i className={profile[0].main.social.className} href="https://www.linkedin.com/in/curtis-pike-a818bb197/"></i>
                
                <a href="https://github.com/Cpike95"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/curtis-pike-a818bb197/"><FaLinkedin /></a>

                  <p className="address">
                    <span>{profile[0].main.name}</span><br />
                    <span>{profile[0].main.phone}<br />
                    {profile[0].main.address.city} {profile[0].main.address.state}, {profile[0].main.address.zip}
                    </span><br />
                  </p>
                                 {/* <p href={profile[0].main.social.url}>{profile[0].main.social.className}</p> */}

            <div className="columns download">
                <p>
                   {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
                </p>
                </div>
             </div>
             </div>
          </div>
       </div>
    </div>
    </div>
    </div>
    </div>

 </section>
  );
}

export default About;
/* <section id="about">
<div className="row">
   <div className="three columns">
<div>
  <div backgroundimage="">
  <h1>Welcome To my Portfolio</h1>
<h2>{profile[0].main.name}</h2>
  </div>
  <div style={{ marginTop: 30 }}>
    <div>
      <div size="md-12">
      <h1>About</h1>
      </div>
    </div>
    <div>
      <div size="md-12">
        <p>
        {profile[0].main.description}
        </p>
      </div>
    </div>
  </div>
</div>
</div>
     </div>


</section> */