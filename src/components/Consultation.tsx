import consultation from "../img/consultation.jpg";
import React from "react";

const background = {
    background: `url(${consultation})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

type ConsultationProps = {
    onThanksModalClick: () => void
}
export const Consultation: React.FC<ConsultationProps> = ({onThanksModalClick}) => {
    return <section className='consultation' style={background}>
        <div className="container">
            <h2 className="title title_left">
                Получите бесплатную консультацию<br/>
                по подбору пульсометра
            </h2>
            <div className="consultation__descr">
                Просто заполните форму заявки<br/>
                и мы перезвоним вам в течении 10 минут
            </div>
            <form className="feed-form" action="#">
                <input name="name" required placeholder="Ваше имя" type="text"/>
                <input name="phone" required placeholder="Ваш телефон" type="number"/>
                <input name="email" required placeholder="Ваш E-mail" type="email"/>

                <button className="button button_submit" onClick={onThanksModalClick}>
                    заказать консультацию
                </button>
            </form>
        </div>
    </section>
}