import { useDropzone } from "react-dropzone";
import SvgSelector from "../../../../../SvgSelector/SvgSelector.jsx";
const AppUploaderDropzone = ({
  onDrop,
  accept,
  open,
  maxFiles,
  maxSize,
  disabled,
  onChange,
}) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      maxFiles,
      maxSize,
      onDrop,
      disabled,
    });

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input
          className="input-zone"
          {...getInputProps()}
          onChange={onChange}
          disabled={disabled}
        />
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
