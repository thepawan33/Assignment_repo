import OpenSeadragon from "openseadragon";
import { useEffect } from "react";

export default function ImgSlider() {
  const title = [
    "/dzi_file/dzi_img.dzi",
    "/dzi_file/dzi_img2.dzi",
    "/dzi_file/dzi_img3.dzi",
  ];

  useEffect(() => {
    const viewer = OpenSeadragon({
      id: "openseadragon",
      prefixUrl: "/images/",
      tileSources: title,
      maxZoomLevel: 8,
      showNavigator: true,
      navigatorAutoFade: false,
      sequenceMode: true,
    });

    return () => viewer && viewer.destroy();
  }, []);

  return <div id="openseadragon" className="h-full w-full"></div>;
}
