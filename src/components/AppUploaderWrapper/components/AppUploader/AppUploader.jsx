import "./AppUploader.scss";
import { useCallback, useState } from "react";
import AppUploaderDropzone from "./components/AppUploaderDropzone/AppUploaderDropzone.jsx";
import AppUploaderImageGrid from "./components/AppUploaderImageGrid/AppUploaderImageGrid.jsx";
import cuid from "cuid";
const AppUploader = ({ files, setFiles }) => {
  // TODO: Добавить валидацию
  // TODO: Дизайн для удаления документа
  // TODO: Если не картинка
  const [filesPrev, setFilesPrev] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      setFiles((prevState) => [
          ...prevState, { id: cuid(), file }
      ])
      const reader = new FileReader();
      reader.onload = function (e) {
        setFilesPrev((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  function deleteFile(id) {
    setFiles((prevSelected) => {
      const newArray = [...prevSelected];
      if (!!newArray.find((item) => item.id === id)) {
        return newArray.filter((item) => item.id !== id);
      }
    });
    setFilesPrev((prevSelected) => {
      const newArray = [...prevSelected];
      if (!!newArray.find((item) => item.id === id)) {
        return newArray.filter((item) => item.id !== id);
      }
    });
  }

  return (
    <div className="uploader">
      <AppUploaderDropzone onDrop={onDrop} accept={"image/*"} />
      {!!filesPrev?.length && (
        <AppUploaderImageGrid files={filesPrev} deleteFile={deleteFile} />
      )}
    </div>
  );
};

export default AppUploader;
