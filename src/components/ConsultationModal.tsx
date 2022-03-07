export const ConsultationModal = () => {
    return <>
        <div className="overlay">
            <div className="modal" id="consultation">
                <div className="modal__close">&times;</div>
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