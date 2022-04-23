import React, { useState, useEffect } from 'react';
import {
    Box, Card, CardContent,
    TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import api from '../../../apis/rtracker-api'
import { Link } from 'react-router-dom'

const Trackers = () => {

    const [state, setState] = useState({});

    const GetTracker = async () => {
        api.Tracker.GetTracker().then((res) => {
            setState(res.data.response || {});
            console.log(res.data.response);
        }).catch((err) => {
            console.log(err)
        });;
    }

    useEffect(() => {
        GetTracker();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box
            component="div">
            <Card sx={{ maxWidth: "100%", background: "#f7f7f7" }} >
                <CardContent>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tracker Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {state.length > 0 && state.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.TrackerName}</TableCell>
                                        <TableCell>{row.TrackerDescription}</TableCell>
                                        <TableCell>{row.TrackerType}</TableCell>
                                        <TableCell>COOL</TableCell>
                                        <TableCell><Tooltip title="Edit Tracker" placement="top"><IconButton aria-label="delete" component={Link} to={`/CreateFrom/${row._id}`}><EditIcon /></IconButton></Tooltip></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box >
    );
};

export default Trackers;