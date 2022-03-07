import {FC} from "react";

type ConsultationModalProps = {
    closeConsultationModal: () => void
    onThanksModalClick: () => void
    isConsultationModal: boolean
}

export const ConsultationModal: FC<ConsultationModalProps> =
    ({closeConsultationModal, onThanksModalClick, isConsultationModal}) => {
        let display = isConsultationModal ? {display: 'block'} : {display: 'none'}
        return <>
            <div className="overlay" style={display}>
                <div className="modal" id="consultation" style={display}>
                    <div className="modal__close" onClick={closeConsultationModal}>&times;</div>
                    <div className="modal__subtitle">Просто заполните форму заявки</div>
                    <div className="modal__descr">и мы перезвоним вам в течении 10 минут</div>
                    <form className="feed-form feed-form_mt25" action="#">
                        <input name="name" placeholder="Ваше имя" type="text"/>
                        <input name="phone" placeholder="Ваш телефон"/>
                        <input name="email" placeholder="Ваш E-mail" type="email"/>

                        <button className="button button_submit" onClick={onThanksModalClick}>
                            заказать консультацию
                        </button>
                    </form>
                </div>
            </div>
        </>
    }