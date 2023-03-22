import './ApplicationCalculator.scss';
const ApplicationCalculator = () => {
    return (
        <div className="app-calculator">
            <div className="app-calculator-top">
                <div className="app-calculator-top__text">Вы получите:</div>
                <div className="app-calculator-top__text">15 000 рублей</div>
                <div className="app-calculator-top__text">На срок:</div>
                <div className="app-calculator-top__text">30 дней</div>
            </div>
            <div className="app-calculator__delimiter" />
            <div className="app-calculator-bottom">
                <div className="app-calculator-bottom__text">К возврату:</div>
                <div className="app-calculator-bottom__text">19 500 рублей</div>
                <div className="app-calculator-bottom__text">До (включительно):</div>
                <div className="app-calculator-bottom__text">31 марта 2023</div>
            </div>
        </div>
    )
}

export default ApplicationCalculator;