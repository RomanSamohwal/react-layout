import feed1 from './../img/feed_1.png'
import feed2 from './../img/feed_2.png'
import feed3 from './../img/feed_3.png'

export const Feed = () => {
    return <>
        <section className="feed">
            <div className="container">
                <h2 className="title">отзывы клиентов</h2>
                <div className="feed__item fadeInUp wow" data-wow-duration="1.2s" data-wow-delay="0.8s">
                    <img src={feed1} alt="Ирина Иванченко" className="feed__img"/>
                        <div className="feed__text">
                            <div className="feed__subtitle">Ирина Иванченко</div>
                            <div className="feed__count">2 полумарафона</div>
                            <div className="feed__descr">Не знала, что себе купить - обратилась к ребятам из RunSmart -
                                подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности.
                                Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же.
                                <br/>
                                    Новые цели - новый гаджет!
                                    <br/>
                                        Спасибо, RunSmart!
                            </div>
                        </div>
                </div>
                <div className="feed__item fadeInUp wow" data-wow-duration="1.2s" data-wow-delay="0.8s">
                    <img src={feed2} alt="Иван Сёмочкин" className="feed__img"/>
                        <div className="feed__text">
                            <div className="feed__subtitle">Иван Сёмочкин</div>
                            <div className="feed__count">1 полумарафон</div>
                            <div className="feed__descr">Крутая штука-пульсометр. Обычно без них бегал. Оказывается
                                только хуже себе делал.
                                Купил пульсометр, ещё в подарок получил тренировку. Со мной вместе провели первую
                                тренировку, научили пользоваться новым гаджетом. Также объяснили основы анатомии,
                                составили план тренировок на месяц вперёд.
                                <br/>
                                    С ними подготовился к своему первому полумарафону! Спасибо!!!
                            </div>
                        </div>
                </div>
                <div className="feed__item fadeInUp wow" data-wow-duration="1.2s" data-wow-delay="0.8s">
                    <img src={feed3} alt="Юлия Дашкина" className="feed__img"/>
                        <div className="feed__text">
                            <div className="feed__subtitle">Юлия Дашкина</div>
                            <div className="feed__count">2 полумарафона</div>
                            <div className="feed__descr">Долго не могла начать бегать, т.к. до этого несколько раз
                                начинала, но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге с
                                контролем пульса и решила попробовать.
                                <br/>
                                    Позвонила, ребята поинтересовались моими целями и подобрали очень интересный вариант
                                    со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона и
                                    несколько более коротких забегов и не намерена останавливаться!
                                    <br/>
                                        Спасибо!!!
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </>
}