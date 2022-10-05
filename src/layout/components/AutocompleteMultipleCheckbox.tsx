import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export interface AutocompleteOption {
  label: string
  value: any
}

export interface AutocompleteMultipleCheckboxProps {
  id: string
  label: string,
  placeholder: string,
  size: any,
  defaultValues: AutocompleteOption[],
  options: AutocompleteOption[],
  onChange: Function;
}

export const AutocompleteMultipleCheckbox = ({
  id,
  label,
  size,
  placeholder,
  defaultValues,
  options,
  onChange
}: AutocompleteMultipleCheckboxProps) => {
  return (
    <Autocomplete
      multiple
      id={id}
      options={options}
      disableCloseOnSelect
      size={size}
      defaultValue={defaultValues}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      onChange={(e, value) => onChange(id, value)}
      getOptionLabel={(option: AutocompleteOption) => option.label}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      limitTags={1}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
};
