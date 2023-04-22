import "./AppUploader.scss";
import { useCallback, useEffect, useState } from "react";
import AppUploaderDropzone from "./components/AppUploaderDropzone/AppUploaderDropzone.jsx";
import AppUploaderImageGrid from "./components/AppUploaderImageGrid/AppUploaderImageGrid.jsx";
import cuid from "cuid";
import { uploadPassportAsync } from "../../../../store/reducers/storage.js";
import { useDispatch } from "react-redux";
const AppUploader = ({ type, maxFiles, disabled }) => {
  const dispatch = useDispatch();
  const [filesPrev, setFilesPrev] = useState([]);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      // if (!!files?.length && maxFiles > files?.length) {
        setFiles((prevState) => [...prevState, { id: cuid(), file }]);
        const reader = new FileReader();
        reader.onload = function (e) {
          setFilesPrev((prevState) => [
            ...prevState,
            { id: cuid(), src: e.target.result },
          ]);
        };
        reader.readAsDataURL(file);
        return file;
      // }
    });
  }, []);

  function uploadPassport() {
    if (files?.length > 0) {
      const file = files[0]?.file;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('user_id', localStorage.getItem("userId"));
      formData.append('name', file?.name?.split('.')[0]);
      formData.append('type', '4');
      formData.append('is_public', 'false');
      dispatch(
        uploadPassportAsync({
          data: formData
        })
      );
    }
  }

  function deleteFile(id) {
    setFiles((prevSelected) => {
      if (!!files?.length) {
        const newArray = [...prevSelected];
        if (!!newArray?.find((item) => item?.id === id)) {
          return newArray?.filter((item) => item?.id !== id);
        }
      }
    });
    setFilesPrev((prevSelected) => {
      if (!!filesPrev?.length) {
        const newArray = [...prevSelected];
        if (!!newArray?.find((item) => item?.id === id)) {
          return newArray?.filter((item) => item?.id !== id);
        }
      }
    });
  }

  useEffect(() => {
    if (type === 'passport') uploadPassport();
  }, [files]);

  return (
    <div className="uploader">
      <AppUploaderDropzone
        onDrop={onDrop}
        accept={"image/*"}
        maxFiles={maxFiles}
        disabled={disabled}
        onChange={onDrop}
      />
      {!!filesPrev?.length && (
        <AppUploaderImageGrid files={filesPrev} deleteFile={deleteFile} />
      )}
    </div>
  );
};

export default AppUploader;
