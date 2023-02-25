import AmountOfCreditForm from "../../../../components/AmountOfCreditForm/AmountOfCreditForm.jsx";
import './MainBroadcastBlock.scss'
import MainBroadcastList from "./components/MainBrodcastList/MainBroadcastList.jsx";
const MainBroadcastBlock = () => {
    return (
        <div className="broadcast-block">
            <MainBroadcastList />
            <AmountOfCreditForm />
        </div>
    )
}

export default MainBroadcastBlock;