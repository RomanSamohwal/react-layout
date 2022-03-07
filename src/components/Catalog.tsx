import {CatalogItem} from "./CatalogItem";

export const Catalog = () => {
    return <section className='catalog'>
        <div className="container">
            <h2 className="title">Каталог пульсометров</h2>
            <ul className="catalog__tabs">
                <li className="catalog__tab catalog__tab_active">
                    <div>Для фитнеса</div>
                </li>
                <li className="catalog__tab">
                    <div>для бега</div>
                </li>
                <li className="catalog__tab">
                    <div>для триатлона</div>
                </li>
            </ul>
            <div className="catalog__content catalog__content_active">
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
            </div>
            {/*<div className="catalog__content">*/}
            {/*    <div className="catalog-item">*/}
            {/*        <div className="catalog-item__wrapper">*/}
            {/*            <div className="catalog-item__content catalog-item__content_active">*/}
            {/*                <img src={pulsometr} alt="pulsometr" className="catalog-item__img"/>*/}
            {/*                <div className="catalog-item__subtitle">Пульсометр Polar FT1</div>*/}
            {/*                <div className="catalog-item__descr">Для первых шагов в тренировках, основанных на*/}
            {/*                    сердечном ритме*/}
            {/*                </div>*/}
            {/*                <a href="#" className="catalog-item__link">ПОДРОБНЕЕ</a>*/}
            {/*            </div>*/}
            {/*            <ul className="catalog-item__list ">*/}
            {/*                <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Вы увидите информативный графический индикатор целевых тренировочных зон пульса;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Также Вы увидите информацию о расходе калорий за тренировку;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Вы сможете посмотреть данные по 10 тренировкам.*/}
            {/*                </li>*/}
            {/*                <a href="#" className="catalog-item__back">назад</a>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        <hr/>*/}

            {/*        <div className="catalog-item__footer">*/}
            {/*            <div className="catalog-item__prices">*/}
            {/*                <div className="catalog-item__old-price">4 750 руб.</div>*/}
            {/*                <div className="catalog-item__price">4 500 руб.</div>*/}
            {/*            </div>*/}
            {/*            <button className="button button_mini">КУПИТЬ</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="catalog__content">*/}
            {/*    <div className="catalog-item">*/}
            {/*        <div className="catalog-item__wrapper">*/}
            {/*            <div className="catalog-item__content catalog-item__content_active">*/}
            {/*                <img src={pulsometr} alt="pulsometr" className="catalog-item__img"/>*/}
            {/*                <div className="catalog-item__subtitle">Пульсометр Polar FT1</div>*/}
            {/*                <div className="catalog-item__descr">Для первых шагов в тренировках, основанных на*/}
            {/*                    сердечном ритме*/}
            {/*                </div>*/}
            {/*                <a href="#" className="catalog-item__link">ПОДРОБНЕЕ</a>*/}
            {/*            </div>*/}
            {/*            <ul className="catalog-item__list">*/}
            {/*                <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Вы увидите информативный графический индикатор целевых тренировочных зон пульса;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Также Вы увидите информацию о расходе калорий за тренировку;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Вы сможете посмотреть данные по 10 тренировкам.*/}
            {/*                </li>*/}
            {/*                <a href="#" className="catalog-item__back">назад</a>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        <hr/>*/}

            {/*        <div className="catalog-item__footer">*/}
            {/*            <div className="catalog-item__prices">*/}
            {/*                <div className="catalog-item__old-price">4 750 руб.</div>*/}
            {/*                <div className="catalog-item__price">4 500 руб.</div>*/}
            {/*            </div>*/}
            {/*            <button className="button button_mini">КУПИТЬ</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="catalog-item">*/}
            {/*        <div className="catalog-item__wrapper">*/}
            {/*            <div className="catalog-item__content catalog-item__content_active">*/}
            {/*                <img src={pulsometr} alt="pulsometr" className="catalog-item__img"/>*/}
            {/*                <div className="catalog-item__subtitle">Пульсометр Polar FT1</div>*/}
            {/*                <div className="catalog-item__descr">Для первых шагов в тренировках, основанных на*/}
            {/*                    сердечном ритме*/}
            {/*                </div>*/}
            {/*                <a href="#" className="catalog-item__link">ПОДРОБНЕЕ</a>*/}
            {/*            </div>*/}
            {/*            <ul className="catalog-item__list">*/}
            {/*                <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Вы увидите информативный графический индикатор целевых тренировочных зон пульса;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Также Вы увидите информацию о расходе калорий за тренировку;*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    Вы сможете посмотреть данные по 10 тренировкам.*/}
            {/*                </li>*/}
            {/*                <a href="#" className="catalog-item__back">назад</a>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        <hr/>*/}

            {/*        <div className="catalog-item__footer">*/}
            {/*            <div className="catalog-item__prices">*/}
            {/*                <div className="catalog-item__old-price">4 750 руб.</div>*/}
            {/*                <div className="catalog-item__price">4 500 руб.</div>*/}
            {/*            </div>*/}
            {/*            <button className="button button_mini">КУПИТЬ</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    </section>
}