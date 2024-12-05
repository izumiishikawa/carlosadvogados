import React from "react";
import { Map } from "./styles";
import "leaflet/dist/leaflet.css";
import { TileLayer, Marker, Popup } from "react-leaflet";
import logo from "../../assets/imgs/bg_logo.png"
import L from "leaflet";

export default function Location() {
  const MarkerIcon = L.icon({
    iconUrl: logo,
    className: "rounded-full",
    iconSize: [40, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  return (
    <div
      className="flex flex-col p-16 text-center
     items-center gap-10 w-[80%] max-lg:w-[100%] mx-auto"
    >
      <div>
        <h1 className="text-3xl font-semibold tracking-widest">
          NOSSA LOCALIZAÇÃO
        </h1>
        <h2 className="italic text-lg max-w-[600px] mt-7 font-[Lora]">
          Atuamos em diversas áreas do direito, com foco na defesa dos direitos
          do trabalhador e na concessão de benefícios previdenciários.
        </h2>
      </div>
      <Map center={[-19.747657472349065, -47.936718565609145]} zoom={15}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/twilightmoon/cl70w18v6000v15moe6rcn2iy/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker icon={MarkerIcon} position={[-19.747657472349065, -47.93671856560914]}>
          <Popup>
            Carlos Advogados <br />
          </Popup>
        </Marker>
      </Map>
      <div className="w-full flex gap-8 justify-start max-sm:flex-col">
        <div className="flex flex-col text-left">
          <h2 className="font-bold text-lg">Endereço</h2>
          <h2 className="italic text-lg">
            Av. Leopoldino de Oliveira, 4113 - salas 220/221
          </h2>
        </div>
        <div className="flex flex-col text-left">
          <h2 className="font-bold text-lg">Horário</h2>
          <h2 className="italic text-lg">
          Seg a Sex das 08h às 18h
          </h2>
        </div>
      </div>
    </div>
  );
}
