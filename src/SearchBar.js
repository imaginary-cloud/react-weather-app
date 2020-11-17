import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { useQuery } from "react-query";

function SearchBar(props) {
  const [input, setInput] = useState("");

  const { data, isLoading, isError, error } = useQuery(
    ["getLocationInfo", input],
    () => {
      if (input) {
        return axios
          .get(
            `http://localhost:8010/proxy/api/location/search/?query=${input}`
          )
          .then(({ data } = {}) => data);
      } else return [];
    }
  );

  return (
    <Autocomplete
      id="combo-box-demo"
      fullWidth
      options={!isLoading ? data : []}
      getOptionLabel={option => option.title}
      renderInput={params => (
        <TextField
          {...params}
          label="Select a Location"
          variant="outlined"
          onChange={(event, value) => setInput(event.target.value)}
        />
      )}
      onChange={(event, value) => props.onChange(value)}
    />
  );
}
export default SearchBar;
