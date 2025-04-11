import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { handleInputField, handlePreview } from "../../redux/slice/formSlice";
import { useDispatch } from "react-redux";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ImageSelector = () => {
  const [url, setNewUrl] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      let reader = new FileReader();
      reader.onloadend = function () {
        dispatch(handleInputField({ imageUrl: reader.result }));
      };

      reader.readAsDataURL(file);
      const url = URL.createObjectURL(file);
      setNewUrl(url);
    }
  };

  const previewOpener = () => {
    dispatch(handlePreview());
  };

  return (
    <div className="mt-3">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload Photo
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
      </Button>

      {url && (
        <span
          onClick={previewOpener}
          className="text-sm font-medium text-blue-500 underline cursor-pointer hover:text-blue-700 transition-all"
        >
          👁️Preview Image
        </span>
      )}
    </div>
  );
};

export default ImageSelector;
