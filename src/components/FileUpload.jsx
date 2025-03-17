import React, { useState } from 'react';

const FileUpload = ({setFile, file}) => {
  

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    
  };

  return (
    <>
      <div className="">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
        </section>
      )}

      {file && (
        <button 
          onClick={handleUpload}
          className="submit"
        ></button>
      )}
    </>
  );
};

export default FileUpload;