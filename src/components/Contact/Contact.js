import React, { useState } from 'react';
import "./Contact.css"
import {BsSend} from "react-icons/bs"

const Contact = () => {
    const API = "http://localhost:8080/sendemail";

    const [name, setName]  = useState();
    const [email, setEmail]  = useState();
    const [jobtype, setJobType]  = useState();
    const [message, setMessage]  = useState();

    const sendEmail = () =>{
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application.json"
            },
            body: JSON.stringify({
                name,
                email,
                jobtype,
                message
            })
        })
        .then(res=>res.json())
        .then((result) => {
            if(result.error){
              
            }
            setName("");
            setEmail("");
            setJobType("");
            setMessage("");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div className='container contact-section' id="contact">
        <div className="section-title contact-heading">
          <h5 className="top-space">Contact Me</h5>
          <span className="line"></span>
        </div>
        <div className='row'>
            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                <div className='contact-form-image'>
                    <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5fKOIQgEooflFOZMIYoCP7QUK8sq9yfb3Q&usqp=CAU'
                        alt='Contact'
                    />
                </div>
            </div>
            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                <div className='contact-form-design'>
                    {/* <div className='text-center'>
                        <h5>Contact Me</h5>
                    </div> */}
                    <form>
                        <div className='Contact-form'>
                            <label className='label-form'>Name</label>
                            <input type='text' className='form-control'
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />

                        </div>
                        <div className='Contact-form'>
                            <label className='label-form'>Email</label>
                            <input type='text' className='form-control'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className='Contact-form'>
                            <label className='label-form'>Job Types</label> <br></br>
                            <select className='custom-select'
                                value={jobtype}
                                onChange={(e)=>setJobType(e.target.value)}
                            >
                                <option>Recruiter</option>
                                <option>Manager</option>
                                <option>Full-Time</option>
                                <option>Working Student</option>
                                <option>Other</option>
                            </select>

                        </div>
                        <div className='Contact-form'>
                            <label className='label-form'>Message</label>
                            <textarea rows={4} type='text' className='form-control'
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                            />
                        </div>
                        <div className='button-submit' onClick={sendEmail}>
                            <div>Send <BsSend scale={20}/></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact