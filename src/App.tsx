import {Promo} from "./components/Promo";
import {Advantages} from "./components/Advantages";
import {Consultation} from "./components/Consultation";
import Carousel from "./components/Carousel";
import {Catalog} from "./components/Catalog";
import {Feed} from "./components/Feed";
import {Footer} from "./components/Footer";
import {ConsultationModal} from "./components/ConsultationModal";

function App() {
    return <>
        <Promo/>
        <Advantages/>
        <Consultation/>
        <Carousel/>
        <Catalog/>
        <Feed/>
        <Footer/>
        <ConsultationModal/>
    </>
}

export default App;
