import pulsometr from "../img/pulsometr.png";
import React, {useState} from "react";

type CatalogItemProps = {
    onOrderModalClick: () => void
}

export const CatalogItem: React.FC<CatalogItemProps> = ({onOrderModalClick}) => {
    const [isToggle, setIsToggle] = useState(true)

    const onClickHandler = (event: any) => {
        event.preventDefault()
        setIsToggle(!isToggle)
    }

    return <>
        <div className="catalog-item">
            <div className="catalog-item__wrapper">
                {isToggle && <div className="catalog-item__content catalog-item__content_active">
                    <img src={pulsometr} alt="pulsometr" className="catalog-item__img"/>
                    <div className="catalog-item__subtitle">Пульсометр Polar FT1</div>
                    <div className="catalog-item__descr">Для первых шагов в тренировках, основанных на
                        сердечном ритме
                    </div>
                    <a href="#" className="catalog-item__link" onClick={onClickHandler}>ПОДРОБНЕЕ</a>
                </div>}


                {!isToggle && <ul className="catalog-item__list ">
                    <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;
                    </li>
                    <li>
                        Вы увидите информативный графический индикатор целевых тренировочных зон пульса;
                    </li>
                    <li>
                        Также Вы увидите информацию о расходе калорий за тренировку;
                    </li>
                    <li>
                        Вы сможете посмотреть данные по 10 тренировкам.
                    </li>
                    <a href="#" className="catalog-item__back" onClick={onClickHandler}>назад</a>
                </ul>}
            </div>

            <hr/>

            <div className="catalog-item__footer">
                <div className="catalog-item__prices">
                    <div className="catalog-item__old-price">6 990 руб.</div>
                    <div className="catalog-item__price">6 641 руб.</div>
                </div>
                <button className="button button_mini" onClick={onOrderModalClick}>КУПИТЬ</button>
            </div>
        </div>
    </>
}