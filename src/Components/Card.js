import React from "react";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";

function Cards({ NewHottel, YearOfOpening, images }) {
  return (
    <div className="main">
      <div className="left-container">
        <div className="upper">
          <div className="sub-left">
            <img src={images} alt="movie-banner " className="sub-left" />
          </div>
          <div className="sub-right">
            <h2>{NewHottel}</h2>
            <p>{YearOfOpening}</p>
            <p>
              <span
                style={{
                  border: "0.5px solid white",
                  margin: "0.1rem",
                  padding: "0.2rem",
                  fontSize: "12px",
                }}
              >
                120 min
              </span>
              <span style={{ margin: "0.2rem" }}>
                Action, Journey, experience
              </span>
            </p>
          </div>
        </div>
        <div className="lower">
          <p>
          Change up your weeknight routine with these fresh new summer meals perfect for balmy weather. From chilled soba noodle salad to satay chicken lettuce cups there’s something for everyone.
          </p>
        </div>
        <div className="footer-icons">
          <div className="icons">
          <div className="icons">
            <FaHeart style={{ color: "red" }}/>
          </div>
            <FaShare style={{ color: "gold" }} />
          </div>
          <div className="icons">
            <FaComment style={{ color: "blue" }}/>
          </div>
        </div>
      </div>

      <div className="right-container-movie-banner">
        <img src={images} alt="movie-banner" className="movie-banner" />
      </div>
    </div>
  );
}

export default Cards;