const Image = ({ file, deleteFile }) => {
  return (
    <div className="file-item">
      <img alt={file?.id} src={file?.src} className="file-img" onClick={() => deleteFile(file?.id)} />
    </div>
  );
};

const AppUploaderImageGrid = ({ files, deleteFile }) => {
  const renderImage = (file) => {
    return <Image file={file} key={file.id} deleteFile={deleteFile} />;
  };

  return <section className="file-list">{files.map(renderImage)}</section>;
};

export default AppUploaderImageGrid;
