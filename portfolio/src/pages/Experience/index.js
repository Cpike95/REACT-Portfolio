
import React, {useState} from "react";
import resume from "../../resumeData.json";
import "./style.css"


function Experience() {
  const profile = useState(resume);

  console.log(profile[0])
  return (
    <section id="experience">
      <div backgroundimage="">
        <h1>Experience</h1>
      </div>
      <div style={{ marginTop: 30 }}>
        </div>
          <div size="md-12">
          {profile[0].resume.experience.map(item => ((
              <div className="col-sm-4">
               <div className="card">
                  <div className="card-inner">
                    <div className="header">
                      <h4 className="card-text">{item.company}</h4>
                      <div className="content">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            )}
            </div>
    </section>
        
)}
export default Experience;
