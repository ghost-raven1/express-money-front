import './MainReviewsBlock.scss'
import mainReviewsBlockArrowLeft from 'src/assets/main/Reviews/Arrow/ArrowLeft.svg';
import mainReviewsBlockArrowRight from 'src/assets/main/Reviews/Arrow/ArrowRight.svg';
import {useRef} from "react";
import Carousel from "./components/MainReviewsList/MainReviewsList.jsx";
const MainReviewsBlock = () => {
    const ref = useRef(null);
    const prev = () => {
        requestAnimationFrame(() => {
            const scrollLeft = ref.current.scrollLeft;
            const itemWidth = parseInt(
                getComputedStyle(ref.current.children[0]).width
            );
            ref.current.scrollLeft = scrollLeft - itemWidth * 3;
        });
    };
    const next = () => {
        requestAnimationFrame(() => {
            const scrollLeft = ref.current.scrollLeft;
            const itemWidth = parseInt(
                getComputedStyle(ref.current.children[0]).width
            );
            ref.current.scrollLeft = scrollLeft + itemWidth * 3;
        });
    };

    return (
        <div className="reviews-block">
            <div className="reviews-block-top">
                <div className="reviews-block-top__title">Отзывы</div>
                <div className="reviews-block-top__buttons-reviews buttons-reviews">
                    <div className="buttons-reviews__button" onClick={() => prev()}>
                        <img src={mainReviewsBlockArrowLeft} alt="" />
                    </div>
                    <div className="buttons-reviews__button" onClick={() => next()}>
                        <img src={mainReviewsBlockArrowRight} alt="" />
                    </div>
                </div>
            </div>
           <Carousel ref={ref} />
        </div>
    )
}

export default MainReviewsBlock;