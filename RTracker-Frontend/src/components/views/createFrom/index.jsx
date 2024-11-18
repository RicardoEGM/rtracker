import React, { useRef, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    Box, Card, CardContent, Tab, Tabs, Typography
} from '@mui/material/';
import CreateTracker from '../../molecules/createForm/createTracker';
import CreateFields from '../../molecules/createFields/fields';
import api from '../../../apis/rtracker-api';

const MainCreate = () => {
    const CreateTrackerRef = useRef();
    const [value, setValue] = React.useState(1);
    const [status, setStatus] = React.useState();
    let { id } = useParams();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ChangesStep = async () => {
        CreateTrackerRef.current.getStatus().then(async (res) => {
            await setStatus(res);
            if (res._idTracker !== null) {
                setValue(2);
            }
        });
    };

    const GetTracker = async () => {
        let res = await api.Tracker.GetTrackerByID(id);
        setStatus(res.data.response);
    };

    useEffect(() => {
        if (id !== undefined) {
            GetTracker();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    };

    return (
        <Box component="div">
            <Card sx={{ maxWidth: "100%", background: "#f7f7f7" }}>
                <CardContent>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Tracker" value={1} />
                        <Tab label="Fields" value={2} />
                        <Tab label="Permissions" value={3} disabled />
                    </Tabs>
                    <TabPanel value={value} index={1}>
                        <CreateTracker step={ChangesStep} ref={CreateTrackerRef} data={status} _id={id} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <CreateFields />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Three
                    </TabPanel>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MainCreate;
