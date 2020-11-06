import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import top100Films from "./markers.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Autocomplete
          id="combo-box-demo"
          fullWidth
          options={top100Films}
          getOptionLabel={option => option.marker}
          renderInput={params => (
            <TextField
              {...params}
              label="Select a Location"
              variant="outlined"
            />
          )}
          onChange={(event, value) => console.log(value)}
        />
      </header>
    </div>
  );
}

export default App;
