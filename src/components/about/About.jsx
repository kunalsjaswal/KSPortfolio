import React from 'react'
import { AboutStyleDiv } from './AboutStyle'
import { about_constants } from '../../common/constants/AboutConstants'

const About = () => {
  return (
    <AboutStyleDiv>
      <h2>{ about_constants.title }</h2>
      <p>
        { about_constants.description.split("\n").map((line, indx) => (
          <React.Fragment key={indx}>
            { line } 
            <br/>
          </React.Fragment>
          ) 
        )}
      </p>
      <div className="social-tags">
        {
          about_constants.contact_data.map((item, indx) => (
            item.showExpand ? 
            <div key={indx} className={item.showExpand && 'gmail-class'}>
                <img src={item.icon} alt="icon" />
                <span>{item.link}</span>
            </div>
            :
            <a href={item.link} target='_blank'>
              <img src={item.icon} alt="icon" class = {indx === 1 && 'linkdin-class'}/>
            </a>
          ))
        }
      </div>
    </AboutStyleDiv>
  )
}

export default About