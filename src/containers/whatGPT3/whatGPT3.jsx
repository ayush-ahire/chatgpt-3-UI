import React from 'react'
import './whatGPT3.css'
import Feature from '../feature/Feature'
const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3' id='gpt3'>

      <div className="gpt3__whatgpt3-feature  gpt3__whatgpt3-heading" >
        <Feature title="About Us" text="At MediFor7, We Are Dedicated To Solving A Common Yet Critical Problem—Medication Management. Inspired By The Challenges Faced By Elderly Relatives, Hospital Patients, And Busy Professionals, We Developed An Innovative Solution To Ensure No Dose Is Missed Or Taken Incorrectly. With A Perfect Blend Of Hardware And Software, MediFor7 Is Designed To Make Medication Adherence Simple And Hassle-Free.  " />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="">
          How It Works
        </h1>
      </div>
      <div className="gpt3__whatgpt3-container   ">
        <Feature title='Load Medicines In The Device' text=' Organize Medications Into Dedicated Containers. ' />
        <Feature title='Set Schedules Through The App' text='Use The Mobile App To Program Alerts And Reminders.' />
        <Feature title='Get Alerts On Time' text='LED Indicators And Voice Alerts Notify You When It’s Time To Take Your Medication.' />
        <Feature title='Track Usage' text=' Monitor Medicine Counts And Refills Conveniently Through The App.' />
      </div>
    </div>
  )
}

export default whatGPT3
