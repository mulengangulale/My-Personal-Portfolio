import React from "react";
import "./WorkExperience.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsPersonWorkspace } from "react-icons/bs"

const WorkExperience = () => {
  // const imgUrl = "./uber.jpeg"
  // const containerStyle = {
  //   backgroundImage: `url(${imgUrl})`,
  //   // backgroundSize: 'cover', // You can adjust this as needed
  //   // backgroundPosition: 'center center', // You can adjust this as needed
  //   // width: '100%',
  //   // height: '100vh',
  // };
  const data = [
    {
      companyname: "EcoCAR Competion",
      position: "Software Engineering Intern",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      period: "Aug 2023 - Present",
      techskills: [
        {
          techname: "Python"
        },
        {
          techname: "MatLab"
        },
        {
          techname: "Tensor"
        }
      ]
    },
    {
      companyname: "Uber",
      position: "Software Engineering Intern",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      period: "May 2023 - Aug 2023",
      techskills: [
        {
          techname: "Python"
        },
        {
          techname: "Java"
        },
        {
          techname: "GO"
        }
      ]
    },
    {
      companyname: "ServiceNow",
      position: "Quality Engineering Intern",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      period: "May 2022 - Aug 2022",
      techskills: [
        {
          techname: "Python"
        },
        {
          techname: "Java"
        },
        {
          techname: "React"
        }
      ]
    },
    {
      companyname: "Apple",
      position: "Apple Project Researcher",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      period: "Nov 2022 - May 2023",
      techskills: [
        {
          techname: "Swift"
        },
        {
          techname: "Java"
        },
        {
          techname: "Python"
        }
      ]
    }
  ]
  return (
    <div className="container" id="workexperience">

        <div className="section-title">
          <h5 className="top-space">Work Experience</h5>
          <span className="line"></span>
        </div>

        <VerticalTimeline lineColor="black">
          {data.map((item, index)=>(
            <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            // style={containerStyle}
            contentStyle={{ background: 'black', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  black' }}
            date={item.period}
            dateClassName="date-class"
            iconStyle={{ background: 'black', color: 'white' }}
            icon={<BsPersonWorkspace />}
          >
            <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
            <h5 className="vertical-timeline-element-subtitle">{item.position}</h5>
            <div className="row">
              {item.techskills.map((tec, index)=>(
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className="tech-skills">
                      <div>{tec.techname}</div>
                    </div>
                  </div>
              ))}
            </div>
            <p>
              {item.des}
            </p>
          </VerticalTimelineElement>
          ))}
      
        </VerticalTimeline>
    </div>
  )
}

export default WorkExperience