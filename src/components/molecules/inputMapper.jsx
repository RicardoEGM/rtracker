import React from 'react';
import STextField from '../atoms/inputs/sTextField';
import SDropdown from '../atoms/inputs/sDropdown';
import SCascade from '../atoms/inputs/sCascade';

const InputMapper = (props) => {
    const { properties } = props;

    //#region Stop

    // const [value, setValue] = React.useState(Value);

    // const handleValue = (e) => {
    //     setValue(e);
    // };

    // const handleCascade = (e) => {
    //     const callback = [
    //         {
    //             idField: 6,
    //             NameField: 'numhabitantes1',
    //             LabelField: 'InputCascade1',
    //             Type: 'Number',
    //             PlaceholderInput: 'Escriba el numero de personas que viven con usted',
    //             Attribut: '',
    //             Value: '',
    //             Options: [],
    //             CascadeTrigger: false,
    //             Cascade: {},
    //             Show: true
    //         },
    //         {
    //             idField: 7,
    //             NameField: 'numhabitante2',
    //             LabelField: 'InputCascade2',
    //             Type: 'Number',
    //             PlaceholderInput: 'Escriba el numero de personas que viven con usted',
    //             Attribut: '',
    //             Value: '',
    //             Options: [],
    //             CascadeTrigger: false,
    //             Cascade: {},
    //             Show: true
    //         },
    //         {
    //             idField: 8,
    //             NameField: 'numhabitante3',
    //             LabelField: 'InputCascade3',
    //             Type: 'Number',
    //             PlaceholderInput: 'Escriba el numero de personas que viven con usted',
    //             Attribut: '',
    //             Value: '',
    //             Options: [],
    //             CascadeTrigger: false,
    //             Cascade: {},
    //             Show: true
    //         },
    //         {
    //             idField: 9,
    //             NameField: 'numhabitantes4',
    //             LabelField: 'InputCascade3',
    //             Type: 'Number',
    //             PlaceholderInput: 'Escriba el numero de personas que viven con usted',
    //             Attribut: '',
    //             Value: '',
    //             Options: [],
    //             CascadeTrigger: false,
    //             Cascade: {},
    //             Show: true
    //         }
    //     ];

    //     const filterOption = Options.filter((f) => f.id === e).at();

    //     const resultObj = [];
    //     filterOption.Calling.forEach((element) => {
    //         resultObj.push(callback.find((f) => f.idField === element));
    //     });

    //     console.log(resultObj);
    //     resultObj.forEach((element) => {
    //         element.children = idField;
    //     });

    //     cascadeInputs(resultObj);

    //     setValue(e);
    // };
    //#endregion
    switch (properties.Type) {
        case 'TextBox':
            return (
                <STextField Type={'TextBox'} Properties={properties} />
            );
        case 'Number':
            return (
                <STextField Type={'Number'} Properties={properties} />
            );
        case 'TextArea':
            return (
                <STextField Type={'TextArea'} Properties={properties} />
            );
        case 'Dropdown':
            return (
                <SDropdown Properties={properties} />
            );
        case 'Dropdown Cascade':
            console.log(properties);
            return (
                <SCascade Properties={properties} />
            );
        default:
            return <h1>Do not define input, Input Type is:{properties.Type}</h1>;
    }
};

export default InputMapper;
