import "./AppUploader.scss";
import { useCallback, useState } from "react";
import AppUploaderDropzone from "./components/AppUploaderDropzone/AppUploaderDropzone.jsx";
import AppUploaderImageGrid from "./components/AppUploaderImageGrid/AppUploaderImageGrid.jsx";
import cuid from "cuid";
const AppUploader = () => {
  // TODO: Добавить валидацию
  // TODO: Дизайн для удаления документа
  // TODO: Если не картинка
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      console.log('file', file);
      const reader = new FileReader();
      reader.onload = function (e) {
        setFiles((prevState) => [...prevState, { id: cuid(), src: e.target.result },]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  function deleteFile (id) {
    setFiles((prevSelected) => {
      const newArray = [...prevSelected];
      if (!!newArray.find((item) => item.id === id)) {
        return newArray.filter((item) => item.id !== id);
      }
    })
  }

  return (
    <div className="uploader">
      <AppUploaderDropzone onDrop={onDrop} accept={"image/*"} />
      {!!files?.length && <AppUploaderImageGrid files={files} deleteFile={deleteFile} />}
    </div>
  );
};

export default AppUploader;