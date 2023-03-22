import './ApplicationHelp.scss';
const ApplicationHelp = () => {
    return (
        <div className="app-help">
            <div className="app-help__title">Нужна помощь?</div>
            <div className="app-help__desc">
                Вы можете связаться с нами <br />
                в любое время
            </div>
            {/*TODO: Добавить иконку с ссылку на звонок и подчеркивание*/}
            <div className="app-help__phone">8 800 700 91 15</div>
        </div>
    )
}

export default ApplicationHelp;