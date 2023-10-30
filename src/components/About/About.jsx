import React from 'react'
import './about-style.css'
// import './news1.jpg'
import './new.jpeg'

export default function About() {
  return (
    <div div className='ab-main'>
        <div className='about-header'>
            <p className='about-main'>ABOUT - US</p>
            <p className='arrow'>&#8595;</p>
        </div>
        <div className="accordion container" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">       
            <strong>Welcome to dailyNEWS</strong> 
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
                <strong>At dailyNEWS</strong>   We are committed to delivering up-to-the-minute news and updates from around the world. Our dedicated team of experienced journalists and reporters work tirelessly to bring you the latest stories, insightful analysis, and diverse perspectives on a wide range of topics, from politics and business to technology, health, and entertainment. We believe in the power of information to empower and inspire, and we're here to keep you informed and engaged with the world's most important and intriguing happenings.
                <br />
                <strong> <br />Our Mission</strong> Our mission is simple: to provide our readers with credible, unbiased, and timely news that matters. We understand the fast-paced nature of today's world, and that's why we are dedicated to keeping you informed with news that impacts your life, your community, and the world at large. We value accuracy, objectivity, and the highest standards of journalism. Whether you're seeking breaking news, in-depth features, or thought-provoking opinions, [Your Website Name] is your trusted source for daily updates.
                <br />
                <strong> <br />Join Our Community</strong> We believe that an informed and engaged community is the heart of any news platform. Join us in exploring the world's events, sharing your thoughts, and participating in insightful discussions. Together, we can navigate the complex issues of our time and make sense of the rapidly changing world. Thank you for choosing [Your Website Name] as your source for daily news.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
