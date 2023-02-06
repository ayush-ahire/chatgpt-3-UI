import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import shopify from '../../assets/shopify.png'
import dropbox from '../../assets/dropbox.png'
import atlassian from '../../assets/atlassian.png'

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div> <img src={google} alt="loading error" /> </div>
            <div> <img src={slack} alt="loading error" /> </div>
            <div> <img src={shopify} alt="loading error" /> </div>
            <div> <img src={atlassian} alt="loading error" /> </div>
            <div> <img src={dropbox} alt="loading error" /> </div>
        </div>
    )
}

export default Brand