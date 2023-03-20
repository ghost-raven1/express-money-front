import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import { APIYMaps } from "src/utils/constants";
import AppMap from "./AppMap";
import PropTypes from "prop-types";

const AppMapWrapper = ({ mapPointsList, height, width, zoom }) => {
  return (
    <>
      <YMaps
        version="2.1"
        enterprise={APIYMaps.enterprise}
        preload={APIYMaps.preload}
        query={{
          lang: APIYMaps.lang,
          mode: APIYMaps.mode,
          apikey: "43149528-c995-4a59-8473-29689075f3cb",
        }}
      >
        <AppMap
          height={height}
          width={width}
          points={mapPointsList}
          zoom={zoom}
        />
      </YMaps>
    </>
  );
};

AppMapWrapper.defaultProps = {
  mapPointsList: () => [],
  height: "80vh",
  width: "100%",
};

AppMapWrapper.propTypes = {
  mapPointsList: PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default AppMapWrapper;
