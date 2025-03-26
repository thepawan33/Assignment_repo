import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import { fetchCatImage } from "../redux/slices/catSlice";

const CatComponent = () => {
  const dispatch = useDispatch();

  const { loading, url } = useSelector((state) => state.cat);

  const handleCatImage = () => {
    dispatch(fetchCatImage());
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4, mb: 15 }}>
      <Typography variant="h4" gutterBottom>
        Random Cat Image
      </Typography>
      <Button
        loading={loading}
        onClick={handleCatImage}
        variant="contained"
        sx={{ mb: 2 }}
      >
        Get Cat Image
      </Button>
      <Card sx={{ maxWidth: 400, mx: "auto", mt: 2 }}>
        <CardMedia component="img" image={url} alt="Random Cat" />
      </Card>
    </Box>
  );
};

export default CatComponent;
