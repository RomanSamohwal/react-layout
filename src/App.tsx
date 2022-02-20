import logo from './icons/logo.png'
import main from './img/main.jpg'

function App() {
    return <>
        <div className="promo" style={{
            background: `url(${main})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className='container'>
                <header className="header">
                    <a href="#" className="header__logo">
                        <img src={logo} alt={"logo"}/>
                    </a>
                    <div className="header__official">
                        Официальный представитель
                        <span>Garmin, Polar, Suunto</span>
                    </div>
                    <div className="header__contacts">
                        <a href="tel:+74999228974" className="header__phone">+7 (499) 922-89-74</a>
                        <button className="button">заказать звонок</button>
                    </div>
                </header>

                {/*<div className="promo__wrapper">*/}
                {/*    <h1 className="promo__header">Подбор пульсометра</h1>*/}
                {/*    <h2 className="promo__subheader">с учётом Вашего уровня подготовки</h2>*/}

                {/*    <div className="promo__icons">*/}
                {/*        <div className="promo__icon">*/}
                {/*            <img src="icons/main_screen/timer.png" alt="timer"/>*/}
                {/*                Время подбора:*/}
                {/*                10 минут*/}
                {/*        </div>*/}
                {/*        <div className="promo__icon">*/}
                {/*            <img src="icons/main_screen/hand-cart.png" alt="hand-cart"/>*/}
                {/*                Бесплатная*/}
                {/*                доставка*/}
                {/*        </div>*/}
                {/*        <div className="promo__icon">*/}
                {/*            <img src="icons/main_screen/messages.png" alt="messages"/>*/}
                {/*                Ответим*/}
                {/*                на все вопросы*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <button className="button button_main">заказать кОНСУЛЬТАЦИЮ</button>*/}
                {/*    <div className="promo__link">*/}
                {/*        или*/}
                {/*        <a href="#">ПЕРЕЙТИ В КАТАЛОГ</a>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>
    </>
}

export default App;
