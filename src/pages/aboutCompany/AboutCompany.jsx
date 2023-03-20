import "./AboutCompany.scss";
import banner from "src/assets/about/Banner.svg";
import AppMapWrapper from "../../components/AppMap/AppMapWrapper.jsx";
const AboutCompany = () => {
  return (
    <div className="about-company">
      <img className="about-company__img" src={banner} alt="" />
      <div className="about-company-inner">
        <div className="about-company-inner__map">
          <AppMapWrapper
            mapPointsList={[{ latitude: "55.749633", longitude: "37.537434" }]}
            height="60vh"
            zoom={15}
          />
        </div>
        <div className="about-company-inner__contacts"></div>
      </div>
    </div>
  );
};

export default AboutCompany;
