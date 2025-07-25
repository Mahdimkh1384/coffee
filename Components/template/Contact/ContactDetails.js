import React, { useState } from "react";

function Details() {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const inputValueEmpty = () => {
    setUserName('')
    setUserEmail('')
    setSubject('')
    setMessage('')
  }

  const addOpinion = async (event) => {
    event.preventDefault()
    let newOpinion = {
      username: userName,
      email: userEmail,
      subject,
      body : message
    }

    if (userName && userEmail && message && subject) {
      const res = await fetch("http://localhost:4000/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newOpinion)
      })
      if(res.status === 201){
        alert("send successfully")
        inputValueEmpty()
      }
    }

  }
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Contact Us</h4>
          <h1 class="display-4">Feel Free To Contact</h1>
        </div>
        <div class="row px-3 pb-2">
          <div class="col-sm-4 text-center mb-3">
            <i class="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Address</h4>
            <p>123 Street, New York, USA</p>
          </div>
          <div class="col-sm-4 text-center mb-3">
            <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Phone</h4>
            <p>+012 345 6789</p>
          </div>
          <div class="col-sm-4 text-center mb-3">
            <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Email</h4>
            <p>info@example.com</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pb-5">
            <iframe style={{ width: "100%", height: "443px", border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div class="col-md-6 pb-5">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div class="control-group">
                  <input type="text" class="form-control bg-transparent p-4" id="name" placeholder="Your Name"
                    required="required" data-validation-required-message="Please enter your name"
                    value={userName} onChange={(e) => setUserName(e.target.value)} />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="email" class="form-control bg-transparent p-4" id="email" placeholder="Your Email"
                    required="required" data-validation-required-message="Please enter your email"
                    value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="text" class="form-control bg-transparent p-4" id="subject" placeholder="Subject"
                    required="required" data-validation-required-message="Please enter a subject"
                    value={subject} onChange={(e) => setSubject(e.target.value)} />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <textarea class="form-control bg-transparent py-3 px-4" rows="5" id="message" placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                  <p class="help-block text-danger"></p>
                </div>
                <div>
                  <button class="btn btn-primary font-weight-bold py-3 px-5" type="submit" id="sendMessageButton"
                    onClick={(e) => addOpinion(e)} >Send
                    Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
