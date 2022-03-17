import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { FormControl, TextField, Select, MenuItem, InputLabel } from '@mui/material/';

const SettingFrom = forwardRef((props, ref) => {
    const [state, setState] = useState(false);
    const [jsonTest, setjsonTest] = useState(false);

    const toggleDrawer = (open) => {
        setState(open);
    };

    useImperativeHandle(ref, () => ({
        toggleDrawer,
    }));

    

    return (
        <div>
            <Drawer
                anchor={"right"}
                open={state}
                variant="temporary"
                onClose={() => toggleDrawer(!state)}
            >
                <Box
                    sx={{ marginTop: "80px", paddingInline: "10px", width: 270 }}>

                    <h3>Settings</h3>

                    <FormControl key={"SettingInputs"} sx={{ mt: 2, minWidth: '100%' }}>
                        <InputLabel id={`FormaTypeInput-Label`}>Format inputs</InputLabel>
                        <Select
                            label="Format inputs"
                            labelId={`FormaTypeInput-Label`}
                            id={"FormaTypeInput"}
                        // value={value}
                        // onChange={(e) => handleValue(e.target.value)}
                        >
                            <MenuItem value="" disabled> Select to Format </MenuItem>
                            {["outlined", "filled", "standard"].map((element) => (
                                <MenuItem key={`CustomOptions-${element}`} value={element}>{element}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ minWidth: '100%' }}>
                        <TextField
                            key={"Settings-Insert"}
                            label={"Insert Example"}
                            placeholder={"Json"}
                            // onChange={(e) => handleValue(e.target.value)}
                            multiline
                            rows={4}
                            // value={value}
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl sx={{ minWidth: '100%' }}>
                    <Button variant="contained">Contained</Button>
                    </FormControl>
                </Box>
            </Drawer>
        </div>
    );
});

export default SettingFrom;