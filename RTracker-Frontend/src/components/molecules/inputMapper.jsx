import React from 'react';
import STextField from '../atoms/inputs/sTextField';
import SDropdown from '../atoms/inputs/sDropdown';
import SCascade from '../atoms/inputs/sCascade';

const InputMapper = (props) => {

    const { properties } = props;

    const setCascade = (children) => {
        const idChildren = children[0].children;
        props.addCascadeInputs(idChildren, children);
    };

    const handleValueMapper = (value, input) => {
        props.properties.Value = value;
        props.handleValue(value, input);
    }

    switch (properties.Type) {
        case 'TextBox':
            return (
                <STextField key={`CustomInput${properties.idField}`} Type={'TextBox'} Properties={properties} handleValueMapper={handleValueMapper} />
            );
        case 'Number':
            return (
                <STextField key={`CustomInput${properties.idField}`} Type={'Number'} Properties={properties} handleValueMapper={handleValueMapper} />
            );
        case 'TextArea':
            return (
                <STextField key={`CustomInput${properties.idField}`} Type={'TextArea'} Properties={properties} handleValueMapper={handleValueMapper} />
            );
        case 'Dropdown':
            return (
                <SDropdown key={`CustomInput${properties.idField}`} Properties={properties} handleValueMapper={handleValueMapper} />
            );
        case 'Dropdown Cascade':
            return (
                <SCascade key={`CustomInput${properties.idField}`} Properties={properties} setCascade={setCascade} handleValueMapper={handleValueMapper} />
            );
        default:
            return <h1>Do not define input, Input Type is:{properties.Type}</h1>;
    }
};

export default InputMapper;
