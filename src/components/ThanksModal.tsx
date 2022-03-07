import React from "react";

type ThanksModalProps = {
    closeThanksModal: () => void
    isThanksModal: boolean
}

export const ThanksModal: React.FC<ThanksModalProps> = ({closeThanksModal, isThanksModal}) => {
    let display = isThanksModal ? {display: 'block'} : {display: 'none'}
    return <div className="overlay" style={display}>
        <div className="modal modal_mini" id="thanks" style={display}>
            <div className="modal__close" onClick={closeThanksModal}>&times;</div>
            <div className="modal__subtitle">Спасибо за вашу заявку!</div>
            <div className="modal__descr">Наш менеджер свяжется с вами
                в ближайшее время!
            </div>
        </div>
    </div>
}