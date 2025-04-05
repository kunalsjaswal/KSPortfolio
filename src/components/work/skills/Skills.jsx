import React, { useState } from 'react'
import { SkillsContainerStyle } from './SkillsStyled'
import { skill_details } from '../../../common/constants/WorkConstants'
import { common_colors } from '../../../common/assets/colors';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(0);

  const changeSkillSelection = (indx) => {
    setSelectedSkill(indx);
  }

  return (
    <SkillsContainerStyle>
      <h2> {skill_details.title} </h2>
      <section className="container">
        <section className="skills-list">
          {
            skill_details.skill_data.map((skill, indx) => (
              <div className="select-skill-circle"  style={{border: indx === selectedSkill ? `4px solid ${common_colors.text_color_gray}`:  null}} key={indx} onClick={() => changeSkillSelection(indx)}>
                {
                  skill.dispay_name.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line} <br/>
                    </React.Fragment>
                  ))
                }
              </div>
            ))
          }
        </section>
        <section className="skill-detail">
          <div className="detail-head">
            <h2>{skill_details.skill_data[selectedSkill].dispay_name}</h2>
            <div className="skill-tags">
              {
                skill_details.skill_data[selectedSkill].tags.map((tag, indx) => (
                  <span className="tag-label" key={indx}>{ tag }</span>
                ))
              }
            </div>
          </div>

          <div className="detail-body">
            { skill_details.skill_data[selectedSkill].description.split("\n").map((line, i) => (
              <React.Fragment key={i}> {line} <br/></React.Fragment>
            )) }
          </div>
        </section>
      </section>
    </SkillsContainerStyle>
  )
}

export default Skills