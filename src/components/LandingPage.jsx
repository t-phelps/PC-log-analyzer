import { Link } from "react-router-dom";
import "../LandingStyle.css";
import { NavBar } from "./NavBar";
import "../NavBar.css";

const handleFile = () => {
  console.log("file placeholder");
};

const handleUpload = () => {
  console.log("handle upload to api placeholder");
};

export const LandingPage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="page-content">
        <div>
          <p>Please Submit your CSV File below</p>
        </div>
        <input type="file" onChange={handleFile}></input>
        <button className="btn" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};
