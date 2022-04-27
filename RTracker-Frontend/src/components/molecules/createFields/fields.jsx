import React, { forwardRef, useImperativeHandle, useEffect } from 'react';


import {
    Select, MenuItem, InputLabel, FormControl, TextField, Box, Card,
    CardHeader, CardContent, Typography, FormControlLabel, FormGroup,
    Switch, Grid, ListSubheader, Button
} from '@mui/material/';

import Add from '@mui/icons-material/Add';

import Api from '../../../apis/rtracker-api'

const CreateFields = forwardRef((prop, ref) => {
    const defaultData = {
        Tracker: {
            TrackerName: '',
            TrackerDescription: '',
            TrackerType: '0',
            TrackerCollection: '0',
            TrackerStyle: '0',
            TrackerTimer: false
        },
        _idTracker: null,
        Type: "Create"
    }
    const { data, _id } = prop;
    const [status, setStatus] = React.useState({});

    useImperativeHandle(ref, () => ({
        getStatus: async () => {

            return null;
        }
    }));

    const onInputChange = (event) => {
        let copyStatus = { ...status };

        copyStatus.Tracker[event.target.name] = (event.target.name !== "TrackerTimer") ? event.target.value : event.target.checked;
        setStatus(copyStatus)

    }



    useEffect(() => {
        if (data !== undefined) {
            setStatus({ Tracker: data, _idTracker: _id, Type: "Update" })
        }
    }, [data, _id]);

    return (
        <Box
            component="div">
            <Card sx={{ maxWidth: "100%", background: "#f7f7f7" }} >
                <CardHeader
                    title="Fields"
                    subheader="Lorem ipsum dolor sit amet."
                    style={{ textAlign: 'center' }}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={10} md={10}>
                            <TextField
                                required
                                fullWidth
                                sx={{ minWidth: '100%' }}
                                id="outlined-required"
                                label="Name Fields"
                                placeholder="whiter Name Fields"
                                name="NameFields"
                                // value={status.Tracker.TrackerName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <FormControl sx={{ minWidth: '100%' }}>
                                <InputLabel>
                                    Public?
                                </InputLabel>
                                <Select
                                    label='Public'
                                    name="FieldsPublic"
                                    // value={status.Tracker.TrackerType || "0"}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <MenuItem key={`FieldsPublic-0}`} value={true}>Yes</MenuItem>
                                    <MenuItem key={`FieldsPublic-1}`} value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                component="div">
                                <Card sx={{ maxWidth: "100%", background: "#f7f7f7" }} >
                                    <CardHeader
                                        title="Inputs"
                                        style={{ textAlign: 'left' }}
                                    />
                                    <CardContent>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: 100,
                                                border: "#03a9f4 2px dashed",
                                                backgroundColor: '#e1f5fe9e',
                                                borderRadius: "5px",
                                                padding: "10px",
                                                marginBottom: "10px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"

                                            }}
                                        >
                                            <Button endIcon={<Add />}>Add</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Button variant="contained">{"Edit"}</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box >
    );
});

export default CreateFields;