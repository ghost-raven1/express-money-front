import AppInput from "../../components/AppInput/AppInput.jsx";
import AppButton from "../../components/AppButton/AppButton.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {postTokenAsync} from "../../store/reducers/auth.js";

const AuthPage = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function sendData () {
        dispatch(postTokenAsync({
            username,
            password
        }))
    }
    return (
        <div style={{width: '300px', margin: '0 auto'}}>
            <AppInput label='username' onInput={setUsername} />
            <AppInput label='password' onInput={setPassword} />
            <AppButton mode="black" onClick={() => {sendData()}}>Submit</AppButton>
        </div>
    )
}

export default AuthPage;