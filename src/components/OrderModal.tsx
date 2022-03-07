export const OrderModal = () => {
    return <div className="overlay">
        <div className="modal" id="order">
            <div className="modal__close"></div>
            <div className="modal__subtitle">Ваш заказ:</div>
            <div className="modal__descr">Пульсометр Polar FT1</div>
            <form className="feed-form feed-form_mt25" action="#">
                <input name="name" required placeholder="Ваше имя" type="text"/>
                <input name="phone" required placeholder="Ваш телефон"/>
                <input name="email" required placeholder="Ваш E-mail" type="email"/>

                <button className="button button_submit">купить</button>
            </form>
        </div>
    </div>
}