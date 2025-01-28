import React from 'react'
import './features1.css'
import Feature from '../../containers/feature/Feature'

const Features1 = () => {
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
                    title="Set Reminders Easily"
                    text="Sync medication schedules with the hardware."
                />
                <Feature
                    title="Track Medicine Count"
                    text="Keep an eye on remaining medications."
                />
                <Feature
                    title="Store Prescriptions"
                    text="Digital storage for easy access to medicine details."
                />
                <Feature
                    title="Appointment Reminders"
                    text="Never miss important healthcare visits."
                />

                {/* Mobile App Features */}

            </div>
        </div>
    )
}

export default Features1