import { useDropzone } from "react-dropzone";
import SvgSelector from "../../../../../SvgSelector/SvgSelector.jsx";
const AppUploaderDropzone = ({ onDrop, accept, open }) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">
              <SvgSelector id="uploader-icon" />
              <div className="dropzone-content__text">
                Отпустите файлы для добавления
              </div>
            </p>
          ) : (
            <p className="dropzone-content">
              <SvgSelector id="uploader-icon" />
              <div className="dropzone-content__text">
                Загрузите скан паспорта
              </div>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppUploaderDropzone;
