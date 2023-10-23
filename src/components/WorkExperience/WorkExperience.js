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
      des: "The EcoCAR EV Challenge is a four-year collegiate automotive engineering competition, providing an unparalleled, hands-on educational experience that transforms the traditional classroom environment into a hub of automotive innovation",
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
      des: "During my tenure at Uber, I spearheaded three key projects. First, I designed a robust Command Line Interface (CLI) in GO and Python to schedule and manage Machine Learning Orchestration pipelines, enhancing user control and task execution. Second, I engineered an automated Python solution to synchronize tier information between Machine Learning Explorer Projects and pipeline configurations, reducing inconsistencies through daily scheduled synchronization. Lastly, I led the implementation of ISO time duration standards using GO, enabling users to specify execution dates in days and promoting greater temporal flexibility in Machine Learning pipelines. These projects showcased my technical skills and problem-solving abilities.",
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
      des: "During my tenure at ServiceNow, I achieved significant advancements in database automation. I developed Python scripts, elevating automation efficiency by 12% and replacing manual data entry in Excel spreadsheets. Collaborating with peers, I engineered a groundbreaking comparison tool using UI Builder, Node.JS, and React, shifting test execution monitoring from manual Excel sheets to automation, yielding a 17% efficiency increase. I introduced automated testing frameworks, resulting in a 20% improvement in code product efficiency. Additionally, I played a pivotal role in end-to-end product development, spanning testing, deployment, and comprehensive reporting on performance, quality, security, and stability, collaborating with the software development team.",
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
      des: "During my involvement in the Apple Coding Project, I played a key role in several aspects. I was responsible for the development and creation of the project's web-based educational platform. Additionally, I provided guidance and instruction to middle school students, teaching them how to code and build apps using Swift Playground Apps. I also contributed to the completion of instructional designs for the Apple Coding Project and actively promoted its educational objectives. Furthermore, I collaborated with students, faculty, and staff from other institutions involved in the project to aid in the development of research products, including manuscripts, articles, and reports.",
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

        <VerticalTimeline lineColor="rgb(14, 16, 159)">
          {data.map((item, index)=>(
            <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            // style={containerStyle}
            contentStyle={{ background: "rgb(14, 16, 159)", color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  "rgb(14, 16, 159)"' }}
            date={item.period}
            dateClassName="date-class"
            iconStyle={{ background: "rgb(14, 16, 159)", color: 'white' }}
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