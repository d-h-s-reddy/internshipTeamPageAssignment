import React from "react";
import './styling.css';
import img1 from './founder.jfif';
import img2 from './cofounder.jfif';
function Advisors(){
    return (
        <>
          <div class="mainheader"><h1>Mentors And Advisors</h1><hr/></div>
          <div class="founder">
            <div class="imagediv">
                <img src={img1} height="100%" alt="founder"></img>
            </div>
            <div class="founderdata">
                <h1>Vivek Dwivedi</h1>
                <p> Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER</p>
                <button >Message him now</button>
            </div>
          </div>
          <div class="founder">
            <div class="founderdata">
                <h1>Akhil Tripathi</h1>
                <p>Cofounder SciAstra, Mentor, Qualified NEST, Master's Student at NISER</p>
                <button >Message him now</button>
            </div>
            <div class="imagediv">
                <img src={img2} height="100%" alt="founder"></img>
            </div>
          </div>
          <div class="founder">
            <div class="imagediv">
                <img src="https://www.sciastra.com/teams/dr_omkar.jpg" height="100%" alt="founder"></img>
            </div>
            <div class="founderdata">
                <h1>Mentor and Advisor</h1>
                <p> Principal Project Scientist at Indian Institute of Technology, Madras</p>
            </div>
          </div>
          <div class="founder"></div>

        </>
    );
}

export default Advisors;