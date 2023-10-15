import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  LinkedinShareButton,
  LinkedinIcon, 
} from "react-share";
import {Link} from 'react-scroll';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='d-flex'>
                    <p>City Skopje Main st 1200, Macedonia</p>
                </div>
                <div className='d-flex'>
                    <a href='tel:555-555-555'>+(389)123-345</a>
                </div>
                <div className='d-flex'>
                    <p>eleonora_todorovska@yahoo.com</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-2 col-sm-6'>
              <div className='row'>
                <div className='col'>
                  <Link to='home' offset={-100} className='footer-nav'>Home</Link>
                  <br/>
                  <Link to='about' offset={-100} className='footer-nav'>About me</Link>
                  <br/>
                  <Link to='services' offset={-100} className='footer-nav'>Services</Link>
                </div>
                <div className='col'>
                  <Link to='experience' offset={-100} className='footer-nav'>Experience</Link>
                  <br/>
                  <Link to='portfolio' offset={-100} className='footer-nav'>Portfolio</Link>
                  <br/>
                  <Link to='contacts' offset={-100} className='footer-nav'>Contacts</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-6 align-items-centar'>
              <div className='d-flex justify-content-center'>
                <FacebookShareButton
                   url={"https://github.com/eleonora33/portfolio-project-react"}
                   quote={"FullStack Developer"}
                   hashtag='#javascript'
                >
                  <FacebookIcon className='mx-3' size={36} />
                </FacebookShareButton>
                <TwitterShareButton
                   url={"https://github.com/eleonora33/portfolio-project-react"}
                   quote={"FullStack Developer"}
                   hashtag='#javascript'
                >
                  <TwitterIcon className='mx-3' size={36} />
                </TwitterShareButton>
                <ViberShareButton
                   url={"https://github.com/eleonora33/portfolio-project-react"}
                   quote={"FullStack Developer"}
                   hashtag='#javascript'
                >
                  <ViberIcon className='mx-3' size={36} />
                </ViberShareButton>
                <LinkedinShareButton
                   url={"https://github.com/eleonora33/portfolio-project-react"}
                   quote={"FullStack Developer"}
                   hashtag='#javascript'
                >
                  <LinkedinIcon className='mx-3' size={36} />
                </LinkedinShareButton>
              </div>
              <p className='pt-3 text-center'>
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;Eleonora Gjorgjieva | All Rights Reserved
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
