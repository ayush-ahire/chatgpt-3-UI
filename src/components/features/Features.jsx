import React from 'react'
import './features.css'
import Feature from '../../containers/feature/Feature'

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="casestudies">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Features Of Device
        </h1>
        {/* <p>Request Early Access to Get Started</p> */}
      </div>
      <div className="gpt3__features-container">
        {/* Device Features */}
        <Feature
          title="28 Weekly Medicine Containers"
          text="Allows daily 4 doses for a week."
        />
        <Feature
          title="4 Special Purpose Containers"
          text="For additional medications."
        />
        <Feature
          title="LED Alerts For Liquid Medications"
          text="Ensures timely consumption."
        />
        <Feature
          title="LED Alerts For Insulin"
          text="Ideal for diabetes patients."
        />
        <Feature
          title="Voice Alerts With LED Indicators"
          text="Clear and timely reminders for every dose."
        />

        {/* Mobile App Features */}

      </div>
    </div>
  )
}

export default Features