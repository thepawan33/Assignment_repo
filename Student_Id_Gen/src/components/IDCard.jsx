import Button from "@mui/material/Button";
import TemplateOne from "./Templates/TemplateOne/TemplateOne";

import { toPng } from "html-to-image";
import { useRef, useCallback } from "react";
import TemplateTwo from "./Templates/TemplatesTwo/TemplateTwo";

import { useState } from "react";

export default function IDCard() {
  const [template, setTemplate] = useState(false);

  const ref = useRef(null);

  const handleDownload = useCallback(() => {
    if (!ref.current) return;

    toPng(ref.current, {
      cacheBust: true,
      backgroundColor: "#ffffff",
      pixelRatio: 2,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "student-id.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error generating PNG:", err);
      });
  }, []);

  const handleSwitchTemp = () => {
    setTemplate((curr) => !curr);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-600 text-white">
      <div ref={ref}>{template ? <TemplateOne /> : <TemplateTwo />}</div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSwitchTemp}
          sx={{ marginTop: 2, marginRight: 2 }}
        >
          Switch
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={handleDownload}
          sx={{ marginTop: 2 }}
        >
          Download ID
        </Button>
      </div>
    </div>
  );
}
