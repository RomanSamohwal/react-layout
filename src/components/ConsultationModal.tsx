import {FC} from "react";

type ConsultationModalProps = {
    isConsultationModal: boolean
    closeConsultationModal: () => void
}

export const ConsultationModal: FC<ConsultationModalProps> =
    ({isConsultationModal, closeConsultationModal}) => {
        let border = isConsultationModal ? {display: 'block'} : {display: 'none'}

        return <>
            <div className="overlay" style={border}>
                <div className="modal" id="consultation" style={border}>
                    <div className="modal__close" onClick={closeConsultationModal}>&times;</div>
                    <div className="modal__subtitle">Просто заполните форму заявки</div>
                    <div className="modal__descr">и мы перезвоним вам в течении 10 минут</div>
                    <form className="feed-form feed-form_mt25" action="#">
                        <input name="name" placeholder="Ваше имя" type="text"/>
                        <input name="phone" placeholder="Ваш телефон"/>
                        <input name="email" placeholder="Ваш E-mail" type="email"/>

                        <button className="button button_submit">заказать консультацию</button>
                    </form>
                </div>
            </div>
        </>
    }