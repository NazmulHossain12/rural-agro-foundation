import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type OfficeMapProps = {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
};

export default function OfficeMap({
  latitude = 23.685,
  longitude = 90.3563,
  zoom = 11,
  className,
}: OfficeMapProps) {
  const position = useMemo<[number, number]>(
    () => [latitude, longitude],
    [latitude, longitude],
  );

  const icon = useMemo(
    () =>
      L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
    [],
  );

  return (
    <div className={className ?? "w-full h-64 rounded-2xl overflow-hidden"}>
      <MapContainer
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        center={position}
        zoom={zoom}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          icon={icon}
        >
          <Popup>Our Office</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
