import React from 'react'
import './WhyMediFor7.css'
import possibilityImage from '../../assets/ISO 1.png'

const WhyMediFor7 = () => {
    return (
        <div className='gpt3__possibility1 section__padding' >
            <div className="gpt3__possibility-content">

                <h1 className=''>Why Choose MediFor7 ?</h1>
                <ul>
                    <li>
                        <p>
                            Elderly Care Made Easy - Reliable Assistance For Managing Complex Medication Schedules.
                        </p>
                    </li>
                    <li>
                        <p>
                            Hospital Efficiency - Helps Nurses Manage Patient Medications Seamlessly.                        </p>
                    </li>
                    <li>
                        <p>
                            For Busy Professionals - No More Forgetting Daily Medications Amid A Busy Lifestyle.                        </p>
                    </li>
                </ul>


            </div>
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="loading img" />
            </div>

        </div>
    )
}

export default WhyMediFor7