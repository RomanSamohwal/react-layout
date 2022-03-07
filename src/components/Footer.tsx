import facebook from './../icons/facebook.svg'
import instagram from './../icons/instagram.svg'
import pinterest from './../icons/pinterest.svg'

export const Footer = () => {
    return <footer className='footer'>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.0267448501186!2d37.64624047364648!3d55.76831563990905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636edcd2ad%3A0x4c2ca101e2c8c617!2z0JzRj9GB0L3QuNGG0LrQuNC5INC_0YAt0LQsIDQvMywg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEwNzA3OA!5e0!3m2!1sru!2sua!4v1559894689029!5m2!1sru!2sua"
            allowFullScreen/>

        <div className="footer__info">
            <address className="footer__addr">Москва, Мясницкий проезд, д.3с1</address>
            <a className="footer__phone" href="tel:84999228974">8 (499) 922-89-74</a>
            <div className="footer__social">
                <a href="#" className="footer__social-item"><img src={facebook} alt="facebook"/></a>
                <a href="#" className="footer__social-item"><img src={instagram} alt="instagram"/></a>
                <a href="#" className="footer__social-item"><img src={pinterest} alt="pinterest"/></a>
            </div>
        </div>
    </footer>
}