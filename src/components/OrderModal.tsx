import React from "react";

type OrderModal = {
    isOrderModal: boolean
    closeOrderModal: () => void
    onThanksModalClick: () => void
}
export const OrderModal: React.FC<OrderModal> =
    ({isOrderModal, closeOrderModal, onThanksModalClick}) => {

    let display = isOrderModal ? {display: 'block'} : {display: 'none'}

    return <div className="overlay" style={display}>
        <div className="modal" id="order" style={display}>
            <div className="modal__close" onClick={closeOrderModal}>&times;</div>
            <div className="modal__subtitle">Ваш заказ:</div>
            <div className="modal__descr">Пульсометр Polar FT1</div>
            <form className="feed-form feed-form_mt25" action="#">
                <input name="name" required placeholder="Ваше имя" type="text"/>
                <input name="phone" required placeholder="Ваш телефон"/>
                <input name="email" required placeholder="Ваш E-mail" type="email"/>

                <button className="button button_submit" onClick={onThanksModalClick}>купить</button>
            </form>
        </div>
    </div>
}