import React from 'react';
import { FormControl, TextField } from '@mui/material/';


const STextField = (props) => {
    const { Type, LabelField, Value, idField, PlaceholderInput, NameField } = props.Properties;

    const [value, setValue] = React.useState(Value);

    if (value === null) {
        setValue("");
    }

    const handleValue = (e) => {
        setValue(e);
        props.handleValueMapper(e, props.Properties);
    };


    switch (Type) {
        case 'TextBox':
            return (
                <FormControl sx={{ minWidth: '100%' }}>
                    <TextField
                        key={idField}
                        id={NameField}
                        label={LabelField}
                        placeholder={PlaceholderInput}
                        value={value}
                        margin="normal"
                        onChange={(e) => handleValue(e.target.value)}
                        variant="outlined"
                    />
                </FormControl>
            );
        case 'Number':
            return (
                <FormControl sx={{ minWidth: '100%' }}>
                    <TextField
                        key={idField}
                        id={NameField}
                        label={LabelField}
                        placeholder={PlaceholderInput}
                        type="number"
                        value={value}
                        onChange={(e) => handleValue(e.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                </FormControl>
            );
        case 'TextArea':
            return (
                <FormControl sx={{ minWidth: '100%' }}>
                    <TextField
                        key={idField}
                        id={NameField}
                        label={LabelField}
                        placeholder={PlaceholderInput}
                        onChange={(e) => handleValue(e.target.value)}
                        multiline
                        rows={4}
                        value={value}
                        margin="normal"
                        variant="outlined"
                    />
                </FormControl>
            );
        default:
            return <h1>Do not define input, Input Type is:{Type}</h1>;
    };
};

export default STextField;
