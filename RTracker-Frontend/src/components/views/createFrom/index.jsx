import React, { useRef, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    Box, Card, CardContent, Tab
} from '@mui/material/';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CreateTracker from '../../molecules/createForm/createTracker';
import api from '../../../apis/rtracker-api'


const MainCreate = () => {
    const CreateTrackerRef = useRef();
    const [value, setValue] = React.useState('1');
    const [status, setStatus] = React.useState();
    let { id } = useParams();



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ChangesStep = async () => {
        // setTimeout(async () => {
        CreateTrackerRef.current.getStatus().then(async (res) => {
            await setStatus(res);
            if (res._idTracker !== null) {
                setValue('2');
            }
        })


        //TODO: Add tracker in state and insert valor in component createTracker
        const GetTracker = async () => {
            let res = await api.Tracker.GetTrackerByID(id);
            console.log(res.data.response);
        }
        useEffect(() => {
            if (id !== undefined) {

            }
        }, []);// eslint-disable-line react-hooks/exhaustive-deps


        // }, 1000);
    }

    return (
        <Box
            component="div">
            <Card sx={{ maxWidth: "100%", background: "#f7f7f7" }} >
                <CardContent>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                <Tab label="Tracker" value="1" />
                                <Tab label="Fields" value="2" />
                                <Tab label="permissions" value="3" disabled />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><CreateTracker step={ChangesStep} ref={CreateTrackerRef} /></TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </CardContent>
            </Card>
        </Box >
    );
};

export default MainCreate;