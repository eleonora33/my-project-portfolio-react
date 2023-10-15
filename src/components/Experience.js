import React from 'react'

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h1 className='experience'>experience</h1>
            </div>
            <div className='container experience-wrapper'>
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2023-present</h3>
                        <p>KAM dooel, Lead project manager
                        </p>
                    </div>
                </div>
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2021-2022</h3>
                        <p>Lambda Group, SCRUM Master-Volountery</p>
                    </div>
                </div>
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2016-2023</h3>
                        <p>KAM dooel, Product Project Manager</p>
                    </div>
                </div>
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2019-2020</h3>
                        <p>KAM dooel, Sales and logistics manager</p>
                    </div>
                </div>
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2009-2016</h3>
                        <p>Area Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
