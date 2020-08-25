import React, {useState} from "react";
import resume from "../../resumeData.json";
import "./style.css"

function Education() {
  const profile = useState(resume);

  return (
    <section>
      <div backgroundimage="">
        <h1>Education</h1>
      </div>
      <div style={{ marginTop: 30 }}>
      </div>
      <div className="container">
        <div className="row"> 
            {profile[0].resume.education.map(item => ((
              <div className="col-sm-4">
               <div className="card">
                  <div className="card-inner">
                    <div className="header">
                      <div className="content">
                        <h4>{item.school}</h4>
                        <h6>{item.degree}</h6>
                        <p>{item.description}</p>
                        <p>{item.graduated}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            )}
            </div>
        </div>
      </section>
  );
}

export default Education;
