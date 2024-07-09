import React from "react";
import { Grid, Box } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import { styled } from "@mui/system";

const IconBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1rem",
  fontSize: "2rem",
});

const SearchBox = ({ destination, onChange, onSearch }) => {
  return (
    <Grid container alignItems="center" spacing={1} sx={{ marginLeft: "5px" }}>
      <Grid item>
        <input
          type="text"
          value={destination}
          onChange={onChange}
          placeholder="Enter a destination"
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginRight: "8px",
            width: "200px",
          }}
        />
      </Grid>
      <Grid item className="searchIcon">
        <button
          onClick={onSearch}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginTop: "13px",
          }}
        >
          <IconBox>
            <PageviewIcon sx={{ fontSize: "35px" }} />
          </IconBox>
        </button>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
