import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div className='container contact-section'>
        <div className='row'>
            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                <div className='contact-form-image'>
                    <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5fKOIQgEooflFOZMIYoCP7QUK8sq9yfb3Q&usqp=CAU'
                        alt='Contact Image'
                    />
                </div>
            </div>
            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                <div className='contact-form-design'>
                    <div className='text-center'>
                        <h5>Contact Me</h5>
                        <form>
                            <div className='Contact-form'>
                                <label className='label-form'>Name</label>
                                <input type='text' className='form-control'/>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact