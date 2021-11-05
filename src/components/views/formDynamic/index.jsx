import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import InputMapper from '../../molecules/inputMapper';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingFrom from './settings'

const FormDynamic = () => {
    const SettingRef = useRef();
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
                    {
                        id: 1, Value: 45, Text: 'Precio 15$', Calling: [6]
                    },
                    {
                        id: 2, Value: 46, Text: 'Precio 25$', Calling: [7]
                    },
                    {
                        id: 3, Value: 47, Text: 'Precio 35$', Calling: [8, 9, 10, 11, 7, 6]
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
        const _InputCascade = FieldsCopy.filter((f) => f.idField === IdInputs).at();

        if (_InputCascade.Cascade.length > 0) { //Esta lleno?

            console.log('Value');
            console.log(_InputCascade.Value);
            const findInputs = _InputCascade.Options.filter(f => f.id === _InputCascade.Value).at().Calling;

            console.log('Calling');
            console.log(findInputs);
            console.log('Includes');
            console.log(_InputCascade.Cascade.filter(f => findInputs.includes(f.idField)))
            // console.log(_InputCascade.Cascade)
            // if (_InputCascade.Cascade.find(f => f.id === _InputCascade.Value) !== undefined) {
            //     console.log('hey')
            // }
            //else {
            //     InsertItem(Children);
            // }
            // const IDFind = FieldsCopy.filter((f) => f.idField === IdInputs).at().Cascade.map((item) => item.idField);
            // const findValues = FieldsCopy.filter((f) => f.idField === IdInputs).at().Cascade;


            // console.log(IDFind);
            // console.log(findValues);
            // console.log(findValues.filter(f => IDFind.includes(f.idField)));
        } else {
            // InsertItem(Children);
            InsertItem(Children);
        }

        setDynamicForm({ Fields: FieldsCopy });

        function InsertItem(Children) {
            Children.forEach((item) => {
                FieldsCopy.filter((f) => f.idField === IdInputs).at().Cascade.push(item);
            });
        }
    }

    const toggleDrawerRefs = () => {
        SettingRef.current.toggleDrawer(true);
    }

    const handleValue = (e, input) => {
        const FieldsCopy = [...DynamicForm.Fields];
        FieldsCopy.filter((f) => f.idField === input.idField).at().Value = e;
        setDynamicForm({ Fields: FieldsCopy });
    }

    return (


        <Box
            component="div">
            <SettingFrom ref={SettingRef} />


            <Card sx={{ maxWidth: "100%", background: "#f7f7f7" }} >
                <CardHeader
                    title="Tracker Name"
                    subheader="Lorem ipsum dolor sit amet."
                    action={
                        <Chip icon={<SettingsIcon />} onClick={() => toggleDrawerRefs()} label="Settings" clickable />
                    }
                />

                <CardContent>
                    <Box
                        component="form"
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            '&.MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        autoComplete="off">
                        {/* Input  */}
                        {DynamicForm.Fields.map((field, key) => {
                            let render = [];
                            render.push(
                                <div key={`Div-${field.idField}`} >
                                    <InputMapper key={key} properties={field} addCascadeInputs={addCascadeInputs} handleValue={handleValue} />
                                </div>);

                            // Cascade Input
                            if (field.CascadeTrigger && field.Cascade.length > 0) {

                                field.Cascade.forEach((fieldCascade, key_fieldCascade) => {
                                    render.push(
                                        <div key={`DivCascade-${field.idField}`} >
                                            <InputMapper key={key_fieldCascade} properties={fieldCascade} addCascadeInputs={addCascadeInputs} handleValue={handleValue} />
                                        </div>)
                                })
                            };
                            return render
                        })}
                    </Box >
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat consequatur magni asperiores incidunt ratione nisi, omnis reiciendis, eveniet culpa veritatis, tempore fugiat illum mollitia quidem?
                    </Typography>
                </CardContent>
            </Card>
        </Box >
    );
};

export default FormDynamic;