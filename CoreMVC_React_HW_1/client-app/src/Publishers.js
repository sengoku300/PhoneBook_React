import React, { useState, useEffect } from "react";
import "./App.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Publishers()
{
    const [pubs, setPubs] = useState([]);
   
    function ListPublishers() {
        return (pubs.$values.map(p =>
             <TableRow
        key={p.pubId}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
            {p.pubId}
        </TableCell>
        <TableCell align="right">{p.pubName}</TableCell>
        <TableCell align="right">{p.city}</TableCell>
        <TableCell align="right">{p.state}</TableCell>
        <TableCell align="right">{p.country}</TableCell>
                <TableCell align="right">
                    <List>
                        {p.titles.$values.map(t => 
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MenuBookIcon    />
                                    </ListItemIcon>
                                    <ListItemText primary={t.title1} />
                                </ListItemButton>
                            </ListItem>
                            )}
                    </List>
                </TableCell>
       </TableRow>
            ));
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'api/publishers',
            );
            const json = await res.json();
            console.log(json);
            setPubs(json);
        };
        fetchData();
    }, []);

    return (<div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">PubName</TableCell>
                        <TableCell align="right">City</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="center">Titles</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pubs.length != 0 && (
                        <ListPublishers />
                    )}

                    {console.log(pubs.$values)}
                </TableBody>
            </Table>
        </TableContainer>
    </div>);
}