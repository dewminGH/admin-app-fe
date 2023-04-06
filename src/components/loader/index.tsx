import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
      <CircularProgress sx={{ color: "#F150FF" }} />
    </Box>
  );
};

export default Loader;
