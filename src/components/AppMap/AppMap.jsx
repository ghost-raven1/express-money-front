import React, { useEffect, useRef } from "react";
import { useYMaps } from "@pbe/react-yandex-maps";
import PropTypes from "prop-types";
import "./styles/AppMap.scss";
import triangle from "src/assets/about/map-triangle.png";
import EventEmitter from "src/utils/EventEmitter";
import { useDispatch } from "react-redux";
// import { showModal } from "../../../store/reducers/modals";
// import { modalKeys } from "../../../utils/utils";

const AppMap = ({ width, height, zoom, center, points, type, offerPoint }) => {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const iconShape = 30;
  const ymaps = useYMaps([
    "Map",
    "option.Manager",
    "control.ZoomControl",
    "control.RulerControl",
    "control.TrafficControl",
    "control.FullscreenControl",
    "control.TypeSelector",
    "control.SearchControl",
    "control.GeolocationControl",
    "option.presetStorage",
    "Placemark",
    "templateLayoutFactory",
  ]);

  useEffect(() => {
    if (!ymaps || !mapRef.current) return;
    if (!!mapRef.current && mapRef.current?.children?.length === 1)
      mapRef.current.removeChild(mapRef.current.children[0]);
    const pointsArr = [];

    for (const item of points) {
      if (!!item?.latitude && !!item?.longitude) pointsArr.push(item);
    }

    // Карта
    const map = new ymaps.Map(
      mapRef.current,
      {
        center: pointsArr.length
          ? [pointsArr[0].latitude, pointsArr[0].longitude]
          : center,
        zoom,
        type,
        controls: [
          "zoomControl",
          "trafficControl",
          "typeSelector",
          "rulerControl",
          "fullscreenControl",
          "searchControl",
          "geolocationControl",
        ],
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    function indicatorStylesModes(status) {
      if (status === "order") return "placemark__status_green";
      if (status === "missing") return "placemark__status_red";
      if (status === "working") return "placemark__status_green-outline";
    }

    function template() {
      return `<div class="placemark"><div class="placemark__container"><div class={{geoObject.options.status}}></div><img class="placemark__img" src={{geoObject.options.baloonImg}} alt=""/></div><img class="placemark__arrow" src={{geoObject.options.arrow}}  alt=""/></div>`;
    }
    // Кастомные темплейты
    const layoutUser = ymaps.templateLayoutFactory.createClass(template(), {
      build: function () {
        layoutUser.superclass.build.call(this);
      },
    });
    // const placemarkOffer = new ymaps.Placemark(
    //   [offerPoint.lat, offerPoint.lon],
    //   {},
    //   {
    //     iconLayout: "default#image",
    //     zIndex: 1000,
    //   }
    // );
    // map.geoObjects.add(placemarkOffer);
    // Добавление точек на карту
    for (const point of pointsArr) {
      if (!!point.latitude && !!point.longitude) {
        const placemarkUser = new ymaps.Placemark(
          [point.latitude, point.longitude],
          {},
          {
            iconLayout: "default#image",
            zIndex: 1000,
            // iconLayout: layoutUser,
            // iconImageHref: point.img,
            // iconImageSize: [iconShape, iconShape],
            // cursor: "pointer",
            // zIndex: 1000,
            // iconShape: {
            //   type: "Rectangle",
            //   coordinates: [
            //     [-iconShape, -iconShape],
            //     [iconShape, iconShape],
            //   ],
            // },
          }
        );
        map.geoObjects.add(placemarkUser);
        placemarkUser.options.set({
          baloonImg: point.photo,
          arrow: triangle,
          status: indicatorStylesModes(point.status),
        });
        // placemarkUser.events.add(["click"], () => {
        //   dispatch(showModal({ key: modalKeys.mapModal, point }));
        //   EventEmitter.emit("selectPoint", point);
        // });
      }
    }
  }, [center, offerPoint.lat, offerPoint.lon, points, type, ymaps, zoom]);
  return <div className="map" ref={mapRef} style={{ width, height }} />;
};

AppMap.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  lang: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.array,
  offerPoint: PropTypes.object,
  points: PropTypes.array,
};

AppMap.defaultProps = {
  type: "yandex#hybrid",
  width: "100%",
  height: "100vh",
  lang: "ru_RU",
  zoom: 5,
  center: [55.751574, 37.573856],
  offerPoint: {
    lat: 55.751574,
    lon: 37.573856,
  },
  points: [],
};

export default AppMap;
