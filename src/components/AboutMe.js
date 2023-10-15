import React from "react";
import author from "../assets/images/me.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="Eleonora Gj." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Meet Eleonora – a versatile professional skilled in Project Management and currently exploring the world of Full-Stack Web Development. With a five-year background, she seamlessly manages projects and crafts innovative solutions.

                        As an adept Project Manager, Eleonora turns concepts into reality, delivering excellence through effective communication and teamwork.

                        In her journey as a Full-Stack Web Developer, Eleonora is mastering HTML, CSS, Bootstrap, C#, .NET Core, ASP.NET MVC, ASP.NET Web API, Git, React and Angular. Her dedication to growth, coupled with her passion for technology and creativity, fuels her mission to redefine digital experiences.

                        While in the process of honing her Full-Stack skills, Eleonora's versatility and enthusiasm for learning make her an appealing candidate for your team. Whether you need a seasoned Project Manager or an emerging Full-Stack Web Developer, Eleonora's capabilities promise a future of potential.

                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
