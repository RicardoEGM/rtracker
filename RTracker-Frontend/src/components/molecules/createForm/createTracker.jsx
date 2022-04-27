import React, { forwardRef, useImperativeHandle, useEffect } from 'react';


import {
    Select, MenuItem, InputLabel, FormControl, TextField, Box, Card,
    CardHeader, CardContent, Typography, FormControlLabel, FormGroup,
    Switch, Grid, ListSubheader, Button
} from '@mui/material/';

import Api from '../../../apis/rtracker-api'

const CreateTracker = forwardRef((prop, ref) => {
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
    const [status, setTracker] = React.useState(defaultData);

    useImperativeHandle(ref, () => ({
        getStatus: async () => {
            let copyStatus = { ...status };
            const res = await Api.Tracker.Add(status.Tracker);
            copyStatus._idTracker = res.data.response._id;
            await setTracker(copyStatus)
            return copyStatus;
        }
    }));

    const onInputChange = (event) => {
        let copyStatus = { ...status };

        copyStatus.Tracker[event.target.name] = (event.target.name !== "TrackerTimer") ? event.target.value : event.target.checked;
        setTracker(copyStatus)

    }

    const sendData = async () => {
        prop.step();
    }

    useEffect(() => {
        if (data !== undefined) {
            setTracker({ Tracker: data, _idTracker: _id, Type: "Update" })
        }
    }, [data, _id]);

    return (
        <Box
            component="div">
            <Card sx={{ maxWidth: "100%", background: "#f7f7f7" }} >
                <CardHeader
                    title="Create Tracker"
                    subheader="Lorem ipsum dolor sit amet."
                    style={{ textAlign: 'center' }}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                sx={{ minWidth: '100%' }}
                                id="outlined-required"
                                label="Name Tracker"
                                placeholder="whiter Tracker"
                                name="TrackerName"
                                value={status.Tracker.TrackerName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="Description"
                                label="Description"
                                multiline
                                rows={4}
                                name="TrackerDescription"
                                value={status.Tracker.TrackerDescription}
                                onChange={(e) => onInputChange(e)}
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <FormControl sx={{ minWidth: '100%' }}>
                                <InputLabel>
                                    Select Type Tracker
                                </InputLabel>
                                <Select
                                    label='Select Type Tracker'
                                    // value={"0"}
                                    name="TrackerType"
                                    value={status.Tracker.TrackerType || "0"}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <MenuItem value="0" disabled>Select Type Tracker</MenuItem>
                                    <MenuItem key={`type-0}`} value="Basic">Tracker Basic</MenuItem>
                                    <MenuItem key={`type-1}`} value="Cascade" disabled>Tracker With Cascade</MenuItem>
                                    <MenuItem key={`type-2}`} value="Cats" disabled>Tracker with Cats</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <FormControl sx={{ minWidth: '100%' }}>
                                <InputLabel id="LabelTrackerCollectionID">
                                    Tracker Collection
                                </InputLabel>
                                <Select
                                    label='Tracker Collection'
                                    // value={"0"}
                                    labelId={"LabelTrackerCollectionID"}
                                    name="TrackerCollection"
                                    value={status.Tracker.TrackerCollection}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <MenuItem value="0" disabled>Select Collection</MenuItem>
                                    <MenuItem key={`type-1}`} value={false}>New Fields Collection</MenuItem>
                                    <ListSubheader>Templated Using</ListSubheader>
                                    <MenuItem key={`type-0}`} value={1}>Collection example</MenuItem>
                                    <MenuItem key={`type-2}`} value={3}>Collection with Cats</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <FormControl sx={{ minWidth: '100%' }}>
                                <InputLabel id={`FormaTypeInput-Label`}>Format inputs</InputLabel>
                                <Select
                                    label="Format inputs"
                                    labelId={`FormaTypeInput-Label`}
                                    id={"FormaTypeInput"}
                                    name="TrackerStyle"
                                    value={status.Tracker.TrackerStyle || "0"}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <MenuItem value="0" disabled> Select to Format </MenuItem>
                                    {["outlined", "filled", "standard"].map((element) => (
                                        <MenuItem key={`CustomOptions-${element}`} value={element}>{element}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={8}>
                            <FormGroup>
                                {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                <FormControlLabel control={<Switch name="TrackerTimer"
                                    checked={status.Tracker.TrackerTimer}
                                    onChange={(e) => onInputChange(e)} />} label="Timer" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Button variant="contained" onClick={() => sendData()}>{status.Type === "Create" ? "Save" : "Edit"}</Button>
                        </Grid>
                    </Grid>
                    {/* </Box > */}
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat consequatur magni asperiores incidunt ratione nisi, omnis reiciendis, eveniet culpa veritatis, tempore fugiat illum mollitia quidem?
                    </Typography>
                </CardContent>
            </Card>
        </Box >
    );
});

export default CreateTracker;