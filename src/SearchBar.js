import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import top100Films from "./markers.js";

function SearchBar() {
  return (
    <Autocomplete
      id="combo-box-demo"
      fullWidth
      options={top100Films}
      getOptionLabel={option => option.marker}
      renderInput={params => (
        <TextField {...params} label="Select a Location" variant="outlined" />
      )}
      onChange={(event, value) => console.log(value.marker)}
    />
  );
}
export default SearchBar;
