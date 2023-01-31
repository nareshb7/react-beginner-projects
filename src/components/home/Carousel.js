import React, { useState, useEffect } from 'react';

const ImgStore = () => {
  const prevImage = JSON.parse(localStorage.getItem('binaryData') || '');
  const [img, setImg] = useState(prevImage);
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64, 'base64');
    setImg(base64);
  };
  const submitFunc = () => {
    localStorage.setItem('binaryData', JSON.stringify(img));
  };
  return (
    <div>
      <div>
        <h4>Upload Image : </h4>
        <input type="file" name="image" onChange={handleChange} />
        <button onClick={submitFunc}>Submit</button>
      </div>
      <div>
        <img
          src={img}
          alt="imageee"
          style={{ width: '300px', height: '300px' }}
        />
      </div>
    </div>
  );
};
export default ImgStore;
