import React, { Fragment } from "react";
import ButtonOutline from "./Buttons/ButtonOutline/ButtonOutline";

const AddImage = ({ displayImage, image, deleteImage }) => (
  <Fragment>
    {!image && (
      <div className="input-group mb-5 offset-md-3 col-md-6 col-12">
        <div className="custom-file text-left">
          <input
            type="file"
            className="upload-input custom-file-input"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            onChange={displayImage}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile04">
            Choose file
          </label>
        </div>
      </div>
    )}
    {image && (
      <div className="d-block">
        <img
          className="my-2"
          src={image}
          style={{ height: 250 }}
          alt="Recipe"
        />
        <ButtonOutline
          buttonClasses="align-top mt-2 ml-2"
          onClick={deleteImage}
          buttonText="Delete"
        />
      </div>
    )}
  </Fragment>
);

export default AddImage;
