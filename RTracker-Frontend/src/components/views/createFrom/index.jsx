import React from 'react';


import { Select, MenuItem, InputLabel, FormControl, TextField, Box, Card, CardHeader, CardContent, Typography, FormControlLabel, FormGroup, Switch } from '@mui/material/';



const FormDynamic = () => {



    return (
        <Box
            component="div">
            <Card sx={{ maxWidth: "100%", background: "#f7f7f7" }} >
                <CardHeader
                    title="Create Tracker"
                    subheader="Lorem ipsum dolor sit amet."
                />

                <CardContent>
                    <Box
                        component="form"
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            '&.MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        autoComplete="off">
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Name Tracker"
                            placeholder="whiter Tracker"
                        />

                        <FormControl sx={{ minWidth: '100%' }}>
                            <InputLabel>
                                Select Type Tracker
                            </InputLabel>
                            <Select
                                label='Select Type Tracker'
                                value={"0"}
                            // onChange={(e) => handleValue(e.target.value)}
                            >
                                <MenuItem value="0" disabled>Select Type Tracker</MenuItem>
                                <MenuItem key={`type-0}`} value={1}>Tracker Basic</MenuItem>
                                <MenuItem key={`type-1}`} value={2}>Tracker With Cascade</MenuItem>
                                <MenuItem key={`type-2}`} value={3}>Tracker with Cats</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: '100%' }}>
                            <InputLabel>
                                Tracker Collection
                            </InputLabel>
                            <Select
                                label='Tracker Collection'
                                value={"0"}
                            // onChange={(e) => handleValue(e.target.value)}
                            >
                                <MenuItem value="0" disabled>Select Collection</MenuItem>
                                <MenuItem key={`type-0}`} value={1}>Collection example</MenuItem>
                                <MenuItem key={`type-2}`} value={3}>Collection with Cats</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: '100%' }}>
                        <InputLabel id={`FormaTypeInput-Label`}>Format inputs</InputLabel>
                            <Select
                                label="Format inputs"
                                labelId={`FormaTypeInput-Label`}
                                id={"FormaTypeInput"}
                                value={""}
                            // onChange={(e) => handleValue(e.target.value)}
                            >
                                <MenuItem value="" disabled> Select to Format </MenuItem>
                                {["outlined", "filled", "standard"].map((element) => (
                                    <MenuItem key={`CustomOptions-${element}`} value={element}>{element}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked />} label="Timer" />
                        </FormGroup>
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