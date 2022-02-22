import React, { useState } from 'react';
import './Search.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';
import DATA from '../../shared/utils/Data';
import PageNotFound from '../PageNotFound/PageNotFound'

const filter = createFilterOptions();

const Search = () => {
  const history = useHistory();
  const [input, setInput] = useState('');
  const [value, setValue] = useState(null);

  const searchQuery = (e) => {
    console.log('search', input);
    e.preventDefault();
    if (input.length > 0) {
      history.push(`/products/${encodeURIComponent(input)}`);
    }
  };

  const handleKeyDown = (e) => {
    console.log(input, value);
    if (e.key === 'Enter') {
      e.preventDefault();
      searchQuery(e);
    }
  };

  return (
    <div className="search">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (newValue) setInput(newValue.name);
          if (typeof newValue === 'string') {
            setValue({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          // Suggest the creation of a new value
          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Search "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="user-search"
        options={DATA['ALL_PRODUCTS']}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(option) => option.name}
        style={{ width: 170 }}
        freeSolo
        renderInput={(params) => (
          <form className="search__bar">
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              {...params}
              label="Search products"
              variant="standard"
              className="search__input"
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </form>
        )


        }
      />
    </div>
  );
};

export default Search;
