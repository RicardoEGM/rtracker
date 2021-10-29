import React from 'react';
import Box from '@mui/material/Box';
import InputMapper from '../../molecules/inputMapper';


const FormDynamic = () => {
    const [DynamicForm, setDynamicForm] = React.useState({
        Fields: [
            {
                idField: 1,
                NameField: 'scrtUser',
                LabelField: 'Suscription User',
                Type: 'Dropdown',
                PlaceholderInput: 'Select Suscription User',
                Value: '',
                Options: [
                    {
                        Value: 15,
                        Text: 'Costo $15'
                    },
                    {
                        Value: 25,
                        Text: 'Costo $25'
                    },
                    {
                        Value: 35,
                        Text: 'Costo $35'
                    }
                ],
                Attribut: '',
                CascadeTrigger: false,
                Cascade: [],
                Show: true
            },
            {
                idField: 2,
                NameField: 'textNameUser',
                LabelField: 'Name User',
                Type: 'TextBox',
                PlaceholderInput: 'Escriba el nombre del empleado',
                Attribut: '',
                Value: '',
                Options: [],
                CascadeTrigger: false,
                Cascade: [],
                Show: true
            },
            {
                idField: 3,
                NameField: 'textUbi',
                LabelField: 'Vivienda',
                Type: 'TextBox',
                PlaceholderInput: 'Escriba la ubicacion del empleado',
                Attribut: '',
                Value: '',
                Options: [],
                CascadeTrigger: false,
                Cascade: [],
                Show: true
            },
            {
                idField: 4,
                NameField: 'numhabitantes',
                LabelField: 'Numero de habitantes',
                Type: 'Number',
                PlaceholderInput: 'Escriba el numero de personas que viven con usted',
                Attribut: '',
                Value: '',
                Options: [],
                CascadeTrigger: false,
                Cascade: [],
                Show: true
            },
            {
                idField: 5,
                NameField: 'drpdwnCost',
                LabelField: 'Tiempo de pago',
                Type: 'Dropdown Cascade',
                PlaceholderInput: 'Elija la suscripcion del empleado',
                Attribut: '',
                Value: '',
                Options: [
                    { id: 1, Value: 45, Text: 'Precio 15$', Calling: [6] },
                    {
                        id: 2,
                        Value: 46,
                        Text: 'Precio 25$',
                        Calling: [7]
                    },
                    {
                        id: 3,
                        Value: 47,
                        Text: 'Precio 35$',
                        Calling: [8, 9]
                    }
                ],
                CascadeTrigger: true,
                Cascade: [],
                Show: true
            }
        ]
    });


    const addCascadeInputs = (IdInputs, Children) => {

        const FieldsCopy = [...DynamicForm.Fields];

        FieldsCopy.filter((f) => f.idField === IdInputs).at().Cascade = [];
        Children.forEach((item) => {
            FieldsCopy.filter((f) => f.idField === IdInputs).at().Cascade.push(item);
        });

        setDynamicForm({ Fields: FieldsCopy });
    }

    // setDynamicForm({
    //     Fields: copyFrom.Fields
    // });

    return (
        <Box
            component="form"
            sx={{
                display: 'grid',
                gap: 1,
                gridTemplateColumns: 'repeat(6, 1fr)',
                '&.MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off">
            {/* Input  */}
            {DynamicForm.Fields.map((field, key) => {
                let render = [];
                render.push(
                    <div key={`Div-${field.idField}`} >
                        <InputMapper key={key} properties={field} addCascadeInputs={addCascadeInputs} />
                    </div>);

                // Cascade Input
                if (field.CascadeTrigger && field.Cascade.length > 0) {

                    field.Cascade.forEach((fieldCascade, key_fieldCascade) => {
                        render.push(
                            <div key={`DivCascade-${field.idField}`} >
                                <InputMapper key={key_fieldCascade} properties={fieldCascade} addCascadeInputs={addCascadeInputs} />
                            </div>)
                    })
                };
                return render
            })}
        </Box >
    );
};

export default FormDynamic;