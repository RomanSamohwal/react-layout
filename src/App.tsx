import {Promo} from "./components/Promo";
import {Advantages} from "./components/Advantages";
import {Consultation} from "./components/Consultation";
import Carousel from "./components/Carousel";
import {Catalog} from "./components/Catalog";
import {Feed} from "./components/Feed";
import {Footer} from "./components/Footer";
import {ConsultationModal} from "./components/ConsultationModal";
import {useState} from "react";
import {ThanksModal} from "./components/ThanksModal";

function App() {
    const [isConsultationModal, setIsConsultationModal] = useState(false)
    const [isThanksModal, setIsThanksModal] = useState(false)

    const handlerConsultationClick = () => {
        setIsConsultationModal(true)
    }

    const closeConsultationModal = () => {
        setIsConsultationModal(false)
    }

    const handlerThanksModalClick = () => {
        setIsConsultationModal(false)
        setIsThanksModal(true)
    }

    const closeThanksModal = () => {
        setIsThanksModal(false)
    }

    return <>
        <Promo onConsultationClick={handlerConsultationClick}/>
        <Advantages/>
        <Consultation onThanksModalClick={handlerThanksModalClick}/>
        <Carousel/>
        <Catalog/>
        <Feed/>
        <Footer/>
        <ConsultationModal onThanksModalClick={handlerThanksModalClick}
                           closeConsultationModal={closeConsultationModal}
                           isConsultationModal={isConsultationModal}/>
        <ThanksModal closeThanksModal={closeThanksModal} isThanksModal={isThanksModal}/>
    </>
}

export default App;
