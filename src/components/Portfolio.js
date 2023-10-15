import React from 'react';
import codeConsulting from './../assets/images/codeconsulting.jpg';
import coffeeHouse from './../assets/images/coffeefooter.jpg';
import codeAccounting from './../assets/images/codeacounting.jpg';
import wireframes from './../assets/images/coffee house.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import AppModal from './AppModal';

const MODAL_DATA = {
  default: {
    header: "",
    bodyTitle: "",
    bodyMain: "",
    bodyFooter: ""
  },
  codeConsulting: {
    header: "Project Name: KOD Accounting and Consulting",
    bodyTitle: "Web site for company KOD Accounting and Consulting",
    bodyMain: "I am proud to feature KOD, a web development project that I have designed and built from the ground up. This project is a proof to my web development skills and showcases my ability to create a functional and visually appealing website.",
    bodyFooter: "Technologies Used: The website was developed using  HTML, CSS, JavaScript and React."
  },
  codeAccounting: {
    header: "Project Name: KOD Accounting and Consulting ",
    bodyTitle: "Web site for company KOD Accounting and Consulting",
    bodyMain: "The website was crafted with a focus on user experience. The intuitive navigation, clean design, and clear call-to-actions ensure visitors can easily find the information they need.",
    bodyFooter: "Technologies Used: The website was developed using  HTML, CSS, JavaScript and React."
  },
  coffeeHouse: {
    header: "Project Name: Coffee House - student project",
    bodyTitle: "Web shop for selling coffee and coffee accessories.",
    bodyMain: `Dropshipping is an order fulfillment option that allows ecommerce businesses to outsource the processes of procuring, storing, and shipping products to a third party—typically a supplier.
               As the coffee shop market becomes more popular, the number of cafe websites is growing.`,
    bodyFooter: "Build with: JavaScript and .NET Framework."
  },
  wireframes: {
    header: "Project Name: Coffee House - student project",
    bodyTitle: "Web shop for selling coffee and coffee accessories.",
    bodyMain: `Typically the dropshipping process follows this general sequence:
               Customer need to log in/create account and order online,
               Customer create an order,
               Customer must fill in the delivery information and confirm the payment,
               We forwards the order to dropshipper and manipulate the product database,
               Customer receives their product.`,
    bodyFooter: "Description: follow the design in Millanote app, follow the taks created in Trelo."
  },
}

const Portfolio = () => {
    const openModal = (modalType) => {
      setModalShow(true);

      switch (modalType) {
        case "codeConsulting": 
          setModalData(MODAL_DATA.codeConsulting);
          break;
        case "codeAccounting":
          setModalData(MODAL_DATA.codeAccounting);
          break;
        case "coffeeHouse":
          setModalData(MODAL_DATA.coffeeHouse);
          break;
        case "wireframes":
          setModalData(MODAL_DATA.wireframes);
          break;
        default:
          setModalData(MODAL_DATA.default);
          break;
      }
    }
    const [modalShow, setModalShow] = React.useState(false);
    const [modalData, setModalData] = React.useState(MODAL_DATA.default);
    
    return (
        <div id='portfolio' className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper">
                    <div className="portfolio-image-box" >
                        <img className="portfolio-image" src={codeConsulting} alt="..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}  onClick={() => openModal("codeConsulting")} />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={codeAccounting} alt="..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}  onClick={() => openModal("codeAccounting")} />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={coffeeHouse} alt="..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}  onClick={() => openModal("coffeeHouse")} />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={wireframes} alt="..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}  onClick={() => openModal("wireframes")} />
                        <AppModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                data={modalData}
                        />                     
                        <>    
                         </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
