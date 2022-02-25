import cup from "./../icons/advantages/cup.png"
import heart from "./../icons/advantages/heart.png"
import shoe from "./../icons/advantages/shoe.png"

export const Advantages = () => {
    return <>
        <section className='advantages'>
            <div className='container'>
                <h2 className="title">НАШИ ПРЕИМУЩЕСТВА</h2>
                <div className="advantages__wrapper">
                    <div className="advantages__item">
                        <img src={cup} alt="cup" className="advantages__icon"/>
                        <div className="advantages__subtitle">
                            Делимся опытом
                        </div>
                        <div className="advantages__descr">
                            Наши сотрудники всегда готовы поделиться своим опытом,
                            так как сами бегают полумарафоны, переплыли Босфор, готовятся к соревнованиям по
                            триатлону!
                        </div>
                    </div>
                    <div className="advantages__item">
                        <img src={heart} alt="heart" className="advantages__icon"/>
                            <div className="advantages__subtitle">
                                Заботимся о здоровье
                            </div>
                            <div className="advantages__descr">
                                Мы работаем для того,
                                чтобы Ваши занятия спортом шли на пользу Вашему здоровью и были в радость Вам и Вашим
                                близким!
                            </div>
                    </div>
                    <div className="advantages__item">
                        <img src={shoe} alt="shoe" className="advantages__icon"/>
                            <div className="advantages__subtitle">
                                Учим бегать
                            </div>
                            <div className="advantages__descr">
                                Помогаем с обучением
                                правильной технике бега!<br/>
                                Дружим с крупнейшей школой бега в России -
                                <a href="#">I LOVE RUNNING.</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}