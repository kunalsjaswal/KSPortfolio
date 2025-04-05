import React from "react";
import { ExperienceContainerStyle } from "./ExperienceStyle";
import { experience_details } from "../../../common/constants/WorkConstants";

const Experience = () => {
  
  return (
    <ExperienceContainerStyle>
      <h2>{experience_details.title}</h2>

      <section className="container">
        {
          experience_details.experience_data.map((item, indx) => (
            <div className="item" key={indx}>
              <div className="header">
                
                <h3>
                {
                  item.isCurrent && 
                  <div className="active"></div>
                }
                  { item.position } 
                </h3>
                <div> <i>{ item.startDate } - { !item.isCurrent ? item.endDate : "current" }</i></div>
              </div>

              <img src={item.logo} alt="logo" className="logo" />
            </div>
          ))
        }
      </section>
    </ExperienceContainerStyle>
  );
};

export default Experience;
