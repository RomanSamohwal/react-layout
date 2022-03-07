import {Component} from "react";
import Slider from "react-slick";
import slide_1 from './../img/slide_1.jpg'
import slide_2 from './../img/slide_2.jpg'
import slide_3 from './../img/slide_3.jpg'
import left from './../icons/left.svg'
import right from './../icons/right.svg'

function SampleNextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div className={className}
             style={style}
             onClick={onClick}>
            <img src={right} alt="" style={{width: '31px', height: '50px'}}/>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div className={className}
             style={style}
             onClick={onClick}>
            <img src={left} alt=""/>
        </div>
    );
}


export default class Carousel extends Component {

    style = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '-66px'
    }

    render() {
        const settings = {
            adaptiveHeight: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow style = {this.style}/>,
            prevArrow: <SamplePrevArrow style = {this.style}/>
        };

        return <>
            <section className="carousel">
                <div className="container">
                    <Slider {...settings} className='carousel__inner'>
                        <div>
                            <img src={slide_1} alt="slide"/>
                        </div>
                        <div>
                            <img src={slide_2} alt="slide"/>
                        </div>
                        <div>
                            <img src={slide_3} alt="slide"/>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    }
}