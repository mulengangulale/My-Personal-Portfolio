import React, {useState} from "react";
import "./TechStack.css"

function TechStack (){
    const data = [
        {
            name: "Python"
        },
        {
            name: "Java"
        },
        {
            name: "GO"
        },
        {
            name: "HTML"
        },
        {
            name: "Bootstrap"
        },
        {
            name: "React Js"
        },
        {
            name: "Node Js"
        },
        {
            name: "C"
        },
        {
            name: "C#"
        },
        {
            name: "C++"
        },
        {
            name: "MySQL"
        },
        {
            name: "NoSQL"
        }
    ]

    const [showMoreTechStack, setShowMoreTechStack] = useState(9)

    function loadMore(){
        setShowMoreTechStack((prev)=>prev+3)
    }
    return (
        <div className="container techstack-section">
            <div className="section-title">
                <h5>Tech Stack</h5>
                <span className="line"></span>
            </div>
            <div className="row">
                {data.slice(0, showMoreTechStack).map((item, index) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className="tech-content">
                            <span className="tech-number">{index + 1}</span>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))};
            </div>
            {showMoreTechStack >= data.length ? null : <span onClick={loadMore} className="load-more">Load More</span>}
        </div>
    )
}

export default TechStack; 