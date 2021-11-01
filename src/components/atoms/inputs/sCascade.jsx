import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material/';


const SCascade = (props) => {
    const { LabelField, Value, idField, Options, PlaceholderInput, NameField } = props.Properties;
    const [value, setValue] = React.useState(Value);


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
                LabelField: 'InputCascade3 1',
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
                LabelField: 'InputCascade3 2',
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
                idField: 10,
                NameField: 'numhabitante5',
                LabelField: 'InputCascade5 3',
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
                idField: 11,
                NameField: 'numhabitantes6',
                LabelField: 'InputCascade6 4',
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

        const filterOption = Options.filter((f) => f.id === e).at();

        const resultObj = [];
        filterOption.Calling.forEach((element) => {
            resultObj.push(callback.find((f) => f.idField === element));
        });

        resultObj.forEach((element) => {
            element.children = idField;
        });

        props.setCascade(resultObj);
        setValue(e);

    };

    return (
        <>
            <FormControl sx={{ mt: 2, minWidth: '100%' }}>
                <InputLabel id={`${NameField}-Label`}>{LabelField}</InputLabel>
                <Select
                    labelId={`${NameField}-Label`}
                    label={LabelField}
                    id={NameField}
                    value={value}
                    onChange={(e) => handleCascade(e.target.value)}>
                    <MenuItem value="" disabled>
                        {PlaceholderInput}
                    </MenuItem>
                    {Options.map((element) => (
                        <MenuItem key={`CustomCascadeOptions-${element.id}`} value={element.id}>{element.Text}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );

};

export default SCascade;
