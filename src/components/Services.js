import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faCode, faTableTennis, faDiagramProject } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id='services' className="services">
            <h1 className="py-5">my services</h1>
            <div className="container">
                <div className='row'>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="cirkle">
                                <FontAwesomeIcon className="icon" icon={faCode} size='2x' />
                            </div>
                            <h3>Full-stack Web Developer</h3>
                            <p>I'm an enthusiastic learner in the realm of Full-Stack Web Development, eagerly seeking to gain experience and grow my skills.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="cirkle">
                                <FontAwesomeIcon className='icon' icon={faDiagramProject} size='2x' />
                            </div>
                            <h3>Project Management</h3>
                            <p>I approach each project individually and always focus on the result</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="cirkle">
                                <FontAwesomeIcon className='icon' icon={faBarsProgress} size='2x' />
                            </div>
                            <h3>Business Analyst</h3>
                            <p>As a skilled Business Analyst, I leverage data-driven insights to guide strategic decisions, optimize processes, and facilitate meaningful growth for organizations.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className='box'>
                            <div className='cirkle'>
                                <FontAwesomeIcon className='icon' icon={faTableTennis} size='2x' />
                            </div>
                            <h3>SCRUM master</h3>
                            <p>As a dedicated Scrum Master, I'm passionate about fostering collaboration, ensuring efficient workflows, and driving continuous improvement within agile teams.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
