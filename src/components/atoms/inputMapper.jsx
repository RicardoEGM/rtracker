/* eslint-disable react/prop-types */
import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import { Select, MenuItem, InputLabel, FormControl, TextField } from '@mui/material/';

// // eslint-disable-next-line no-unused-vars
// const useStyles = makeStyles((_theme) => ({
//     formControl: {
//         // margin: theme.spacing(1),
//         minWidth: 120
//     },
//     select: {
//         width: 160,
//         marginTop: 18
//     },
//     selectLabel: {
//         marginTop: 15
//     }
// }));

const InputMapper = (props) => {
    const {
        // eslint-disable-next-line react/prop-types
        properties: { Type, LabelField, Value, idField, Options, PlaceholderInput, NameField },
        cascadeInputs
    } = props;

    const [value, setValue] = React.useState(Value);

    const handleValue = (e) => {
        setValue(e);
    };

    const handleCascade = (e) => {
        const callback = [
            {
                idField: 6,
                NameField: 'numhabitantes1',
                LabelField: 'InputCascade1',
                Type: 'Number',
                PlaceholderInput: 'Escriba el numero de personas que viven con usted',
                Attribut: '',
                Value: '',
                Options: [],
                CascadeTrigger: false,
                Cascade: {},
                Show: true
            },
            {
                idField: 7,
                NameField: 'numhabitante2',
                LabelField: 'InputCascade2',
                Type: 'Number',
                PlaceholderInput: 'Escriba el numero de personas que viven con usted',
                Attribut: '',
                Value: '',
                Options: [],
                CascadeTrigger: false,
                Cascade: {},
                Show: true
            },
            {
                idField: 8,
                NameField: 'numhabitante3',
                LabelField: 'InputCascade3',
                Type: 'Number',
                PlaceholderInput: 'Escriba el numero de personas que viven con usted',
                Attribut: '',
                Value: '',
                Options: [],
                CascadeTrigger: false,
                Cascade: {},
                Show: true
            },
            {
                idField: 9,
                NameField: 'numhabitantes4',
                LabelField: 'InputCascade3',
                Type: 'Number',
                PlaceholderInput: 'Escriba el numero de personas que viven con usted',
                Attribut: '',
                Value: '',
                Options: [],
                CascadeTrigger: false,
                Cascade: {},
                Show: true
            }
        ];

        // eslint-disable-next-line react/prop-types
        const filterOption = Options.filter((f) => f.id === e).at();

        const resultObj = [];
        filterOption.Calling.forEach((element) => {
            resultObj.push(callback.find((f) => f.idField === element));
        });

        console.log(resultObj);
        resultObj.forEach((element) => {
            element.children = idField;
        });

        cascadeInputs(resultObj);

        setValue(e);
    };

    switch (Type) {
        case 'TextBox':
            return (
                <FormControl>
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
                <FormControl >
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
                <FormControl>
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
        case 'Dropdown':
            return (
                <FormControl sx={{ mt: 2, minWidth: '100%' }}>
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
                            <MenuItem value={element.Value}>{element.Text}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        case 'Dropdown Cascade':
            return (
                <FormControl sx={{ mt: 2, minWidth: '100%' }}>
                    <InputLabel id={`${NameField}-Label`}>{LabelField}</InputLabel>
                    <Select
                        labelId={`${NameField}-Label`}
                        label={LabelField}
                        id={NameField}
                        value={value}
                        onChange={(e) => handleCascade(e.target.value)}
                    >
                        <MenuItem value="" disabled>
                            {PlaceholderInput}
                        </MenuItem>
                        {Options.map((element) => (
                            <MenuItem value={element.id}>{element.Text}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        default:
            return <h1>Do not define input, Input Type is:{Type}</h1>;
    }
};

export default InputMapper;
