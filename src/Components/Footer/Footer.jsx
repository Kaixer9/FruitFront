import React from "react";
import { Paper, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Footer = () => {
  return (
    <Paper
      elevation={9}
      style={{
        backgroundColor: "white",
        padding: "10px",
        flexDirection: "column",
        display: "flex",
        marginTop: "12px",
        width: "100%",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" color="textSecondary">
        <ApartmentIcon style={{ margintop: "12px" }} /> Proyecto para Reboot
        Academy {""}| {" "}
        <EmailIcon style={{ margintop: "12px" }} /> {""}
        Arcadio9@hotmail.com
      </Typography>
    </Paper>
  );
};

export default Footer;
