import './MainReviewsBlock.scss'
import MainReviewsList from "./components/MainReviewsList/MainReviewsList.jsx";
import {
    mainReviewsBlockArrowLeft,
    mainReviewsBlockArrowRight
} from "../../../../utils/images.js";
const MainReviewsBlock = () => {
    return (
        <div className="reviews-block">
            <div className="reviews-block-top">
                <div className="reviews-block-top__title">Отзывы</div>
                <div className="reviews-block-top__buttons-reviews buttons-reviews">
                    <div className="buttons-reviews__button">
                        <img src={mainReviewsBlockArrowLeft} alt="" />
                    </div>
                    <div className="buttons-reviews__button">
                        <img src={mainReviewsBlockArrowRight} alt="" />
                    </div>
                </div>
            </div>
           <MainReviewsList />
        </div>
    )
}

export default MainReviewsBlock;