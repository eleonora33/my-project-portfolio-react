import React from "react";
import Typed from "react-typed";

const Header = () => {
    const onButtonClick = () => { 
        fetch('EleonoraPDF.pdf').then(response => { 
            response.blob().then(blob => { 
                // Creating new object of PDF file 
                const fileURL = window.URL.createObjectURL(blob); 
                // Setting various property values 
                let alink = document.createElement('a'); 
                alink.href = fileURL; 
                alink.download = 'EleonoraPDF.pdf'; 
                alink.click(); 
            }) 
        })
     }

    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Web development and Project management</h1>
                <Typed
                    className="typed-text" 
                    strings={["Full-stack Web developer", "Lead Project manager", "SCRUM master"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <button className="btn-main-offer"  onClick={onButtonClick}> 
                    download cv
                </button> 
            </div>
        </div>
    )
}

export default Header
