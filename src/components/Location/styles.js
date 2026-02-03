import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Map = styled(MapContainer)`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (min-width: 640px) {
    height: 400px;
  }
`;