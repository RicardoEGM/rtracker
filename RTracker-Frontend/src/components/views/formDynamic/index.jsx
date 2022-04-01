import React, { useRef, useEffect } from 'react';
import SettingFrom from '../../molecules/settingsInputs'
import FormMethod from '../../../apis/rtracker-api'
import Box from '@mui/material/Box';
import InputMapper from '../../molecules/inputMapper';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';

const FormDynamic = () => {
    const SettingRef = useRef();
    const [DynamicForm, setDynamicForm] = React.useState({ Fields: [] });

    const addCascadeInputs = (IdInputs, Children) => {

        const FieldsCopy = [...DynamicForm.Fields];
        const _InputCascade = FieldsCopy.filter((f) => f.idField === IdInputs).at();

        if (_InputCascade.Cascade.length > 0) {

            if (_InputCascade.Cascade.find(f => f.id === _InputCascade.Value) !== undefined) {
                console.log('hey')
            }
            else {
                InsertItem(Children);
            }

        } else {

            InsertItem(Children);
        }

        setDynamicForm({ Fields: FieldsCopy });

        function InsertItem(Children) {
            //TODO: Buscar una forma que no borre la data, si no que filtre entre mostrar y no mostrar
            FieldsCopy.filter((f) => f.idField === IdInputs).at().Cascade = [];
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
        if (FieldsCopy.filter((f) => f.idField === input.idField).at() !== undefined) {
            FieldsCopy.filter((f) => f.idField === input.idField).at().Value = e;
        } else {
            //TODO: Hacer mas corto el codigo
            for (var father in FieldsCopy) {
                if (father.Type === "Dropdown Cascade" && father.Cascade.length > 0) {
                    for (var child in father.Cascade) {
                        if (child.id === input.idField) {
                            child.Value = e;
                        }
                    }
                }

            }
        }
        setDynamicForm({ Fields: FieldsCopy });
    }

    const renderJson = () => {
        //TODO: Buscar una forma para convertir en formato valido para el state
        // setDynamicForm(SettingRef.current.getJsonRender()));

    }

    //firth data load
    useEffect(() => {
        if (DynamicForm.Fields.length === 0) {
            console.log('first load');
            FormMethod.Form.GetFields("avNXK0iEY9URfqlCLI1s").then((res) => {

                setDynamicForm(res.data.response || { Fields: [] });
            }).catch((err) => {
                console.log(err)
                //TODO: Message error
            });
        }
    });
    return (
        <Box
            component="div">
            <SettingFrom ref={SettingRef} renderFunction={renderJson} />

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
                        {DynamicForm.Fields.length > 0 &&
                            DynamicForm.Fields.map((field, key) => {
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