import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material/';


const SDropdown = (props) => {
    const { LabelField, Value, idField, Options, PlaceholderInput, NameField } = props.Properties;
    const [value, setValue] = React.useState(Value);

    const handleValue = (e) => {
        setValue(e);
        props.handleValueMapper(e, props.Properties);
    };

    return (
        <FormControl key={idField} sx={{ mt: 2, minWidth: '100%' }}>
            <InputLabel id={`${NameField}-Label`}>
                {LabelField}
            </InputLabel>
            <Select
                label={LabelField}
                labelId={`${NameField}-Label`}
                id={NameField}
                value={value}
                onChange={(e) => handleValue(e.target.value)}
            >
                <MenuItem value="" disabled>
                    {PlaceholderInput}
                </MenuItem>
                {Options.map((element) => (
                    <MenuItem key={`CustomOptions-${element.id}`} value={element.Value}>{element.Text}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );

};

export default SDropdown;
