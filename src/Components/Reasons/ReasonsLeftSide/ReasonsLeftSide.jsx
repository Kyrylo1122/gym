import "./ReasonsLeftSide.css";
import image from "../../../assets/image1.png";
import imageSec from "../../../assets/image2.png";

import imageThird from "../../../assets/image3.png";

import imageFourth from "../../../assets/image4.png";

export default function ReasonsLeftSide() {
  return (
    <div className="ReasonsLeftSide ">
      <div className="first-container">
        <div className="first-img-container">
          <img src={image} alt="sportsman" width="180" height="450" />
        </div>

        <div className="second-container">
          <img src={imageSec} alt="sportsman" width="400" />
          <div className="third-container">
            <img src={imageThird} alt="sportsman" width="220" />
            <img src={imageFourth} alt="sportsman" width="160" />
          </div>
        </div>
      </div>
    </div>
  );
}
