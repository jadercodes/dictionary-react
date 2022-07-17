import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <section className="Photos">
        <div className="row">
          {photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={photo.src.landscape} className="img-fluid" alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
