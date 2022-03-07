import {Promo} from "./components/Promo";
import {Advantages} from "./components/Advantages";
import {Consultation} from "./components/Consultation";
import Carousel from "./components/Carousel";
import {Catalog} from "./components/Catalog";
import {Feed} from "./components/Feed";
import {Footer} from "./components/Footer";
import {ConsultationModal} from "./components/ConsultationModal";
import {useState} from "react";

function App() {
    const [isConsultationModal, setIsConsultationModal] = useState(false)

    const handlerConsultationClick = () => {
        setIsConsultationModal(true)
    }

    const closeConsultationModal = () => {
        setIsConsultationModal(false)
    }

    return <>
        <Promo onConsultationClick={handlerConsultationClick}/>
        <Advantages/>
        <Consultation/>
        <Carousel/>
        <Catalog/>
        <Feed/>
        <Footer/>
        <ConsultationModal isConsultationModal={isConsultationModal} closeConsultationModal={closeConsultationModal}/>
    </>
}

export default App;
