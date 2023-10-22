import React from 'react';
import "./Education.css"

const Education = () => {
  const data = [
    {name: "Calculus I & II"},
    {name: "Differential Equations"},
    {name: "Pysics I & II"},
    {name: "Chemistry I"},
    {name: "Linear Algebra"},
    {name: "Electronics I"},
    {name: "Data Structures and Algorithms"},
    {name: "Computer Programming I & II"},
    {name: "Fundamentals of Engineering"},
    {name: "Discrete Math"},
    {name: "Digital Circuits"},
    {name: "Ethics"}
  ]
  return (
    <div className='education container' id='education'>
        <div className="section-title">
          <h5 className="top-space">Education</h5>
          <span className="line"></span>
        </div>
        <div className='row education-info'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <div >
              <h5>Bethune-Cookman University</h5>
              <h6>B.S Honors Computer Engineering</h6>
              <h6>Minor:  Math, Physics</h6>
              <h6>Presidential Scholar</h6>
              <h6>4x President's List</h6>
              <h6>4.0 GPA</h6>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <div className='right-align'>
              <h6>Daytona Beach, Florida</h6>
              <h6>May 2025</h6>
            </div>
          </div>
          <div className='relevant-course'>
            <h5> Relevant Courses Taken</h5>
          </div>
          {data.map((item, index)=>(
              <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12' key={index}>
                <div className='course-section'>
                  <h6>{item.name}</h6>
                </div> 
              </div>
            ))}
        </div>
    </div>

  )
}

export default Education