import React, {useState} from "react";
import resume from "../../resumeData.json";
import "./style.css"
// import { IconName } from "react-icons/di";


function Skills() {
  const profile = useState(resume);

  return (
    <section id="skills">
      <div backgroundimage="">
        <h1>Skills</h1>
      </div>
      <div style={{ marginTop: 30 }}>
      </div>
      <div className="container">
        <div className="row"> 
              <div className="col-sm-4">
               <div className="card">
                 <ul>
               {profile[0].resume.skills.map(item => ((
                      <li className="skills">{item.name}</li> 
                  ))
               )}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Skills;
