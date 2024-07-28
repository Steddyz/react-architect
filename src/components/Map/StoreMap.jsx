import React from "react";
import {
  GeolocationControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";

import cl from "./StoreMap.module.css";

export default function StoreMap() {
  return (
    <>
      <div>
        <p className={cl.map__title}>Где мы находимся?</p>
      </div>
      <div className={cl.map__wrapper}>
        <YMaps className={cl.mapp}>
          <Map
            className={cl.yandex_map}
            defaultState={{
              center: [44.967104074572845, 34.13312399999995],
              zoom: 15,
            }}
          >
            <Placemark geometry={[44.967104074572845, 34.13312399999995]} />
            <ZoomControl options={{ float: "right" }} />
            <TypeSelector options={{ float: "right" }} />
            <GeolocationControl options={{ float: "left" }} />
          </Map>
        </YMaps>
      </div>
    </>
  );
}
