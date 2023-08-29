import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useState } from "react";

export default function RoleTracker() {
  const paperStyle = {
    padding: "50px 20px",
    width: 600,
    margin: "Auto",
    marginTop: "20px",
  };
  const [Role, setRole] = useState("");
  const [Company, setCompany] = useState("");
  const [Date, setDate] = useState("");
  const [Link, setLink] = useState("");
  //const classes = UseStyles();
  return (
    <Container
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Personal Job Tracker</u>
        </h1>
        <h2>Fill Details</h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Role"
            variant="outlined"
            fullWidth
            value={Role}
            onChange={(e) => setRole(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Company"
            variant="outlined"
            fullWidth
            value={Company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Date"
            variant="outlined"
            fullWidth
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Link"
            variant="outlined"
            fullWidth
            value={Link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Box>
      </Paper>
    </Container>
  );
}
