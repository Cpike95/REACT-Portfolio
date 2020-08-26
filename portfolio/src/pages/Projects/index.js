import React, {useState}  from "react";
import resume from "../../resumeData.json";
import "./style.css"

function Projects() {
  const profile = useState(resume);

  console.log(profile[0].portfolio.projects.map(item => item.title))
  return (
    
 <section id="projects">
       <div backgroundimage="">
        <h1>Projects</h1>
          <h2>{profile[0].main.name}</h2>
        </div>
        <div style={{ marginTop: 30 }}>
          <div>
            <div className="container">
              <div className="row"> 
                {profile[0].portfolio.projects.map(item => (( 
                <div className="col-sm-4">
                  <div className="card">
                    <div className="image">
                      <a href={item.url}><img className="card-img-top"  src={item.image} /></a>
                    </div>
                    <div className="card-inner">
                      <div class="header">
                        <h4 className="card-text">{item.title}</h4>
                      </div>
                    </div>
                  </div>
              </div>
           )))};
          </div>

        </div>
       </div>
      <div>
     </div>
   </div>
  </section> 
  );
}

export default Projects;
  