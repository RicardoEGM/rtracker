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

    switch (properties.Type) {
        case 'TextBox':
            return (
                <STextField key={`CustomInput${properties.idField}`} Type={'TextBox'} Properties={properties} />
            );
        case 'Number':
            return (
                <STextField key={`CustomInput${properties.idField}`} Type={'Number'} Properties={properties} />
            );
        case 'TextArea':
            return (
                <STextField key={`CustomInput${properties.idField}`} Type={'TextArea'} Properties={properties} />
            );
        case 'Dropdown':
            return (
                <SDropdown key={`CustomInput${properties.idField}`} Properties={properties} />
            );
        case 'Dropdown Cascade':
            return (
                <SCascade key={`CustomInput${properties.idField}`} Properties={properties} setCascade={setCascade} />
            );
        default:
            return <h1>Do not define input, Input Type is:{properties.Type}</h1>;
    }
};

export default InputMapper;
