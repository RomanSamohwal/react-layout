import pageup from './../icons/up.svg'
import {useEffect, useState} from "react";

export const Pageup = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    let style = offset > 1600 ? {display: 'block'} : {display: 'none'}

    return <>
        <a href="#up" className="pageup" style={style}>
            <img src={pageup} alt="up"/>
        </a>
    </>
}