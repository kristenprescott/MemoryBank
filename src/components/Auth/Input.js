import React from "react";
import { InputAdornment, IconButton, Grid, TextField } from "@material-ui/core";
import Visibility from "../../images/eye-open.png";
import VisibilityOff from "../../images/eye-closed.png";

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  //   const handleChange = () => {
  //     console.log("change.");
  //   };

  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? (
                        <img
                          style={{
                            marginLeft: "-100px",
                            cursor: "pointer",
                            width: "10%",
                          }}
                          src={VisibilityOff}
                        />
                      ) : (
                        <img
                          style={{
                            marginLeft: "-100px",
                            cursor: "pointer",
                            width: "10%",
                          }}
                          src={Visibility}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
