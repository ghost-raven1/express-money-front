import AppUploader from "./components/AppUploader/AppUploader.jsx";
import './AppUploaderWrapper.scss';

const AppUploaderWrapper = () => {
    return (
        <div className="uploader">
            <AppUploader />
            <div className="uploader-text">
                <div className="uploader-text__title">Скан паспорта: доступные форматы:</div>
                <div className="uploader-text__formats">jpg, gif, png, pdf, wmv, mp4, MOV, vob. Размер не более 20 мб</div>
            </div>
        </div>
    )
}

export default AppUploaderWrapper;