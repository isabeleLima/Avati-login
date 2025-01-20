import { styled, TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
  "& label": {
    color: "#fff3c4",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff3c4",
    },
  },

  "& .MuiInputBase-input": {
    caretColor: "#fff3c4",
  },
});
