import React, { useState, useEffect } from "react";
import "./App.css";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from '@mui/material/Button';
import $ from 'jquery';
import TitleForm from "./TitleForm"

export default function Titles() {
    const [titles, setTitles] = useState([]);
    const [onShow, setOnShow] = useState(false);
    const [pubs, setPubs] = useState([]);

    // Эффект благодоря которому
    // наша функция подхватывает данные из API
    useEffect(() => {
        // Получаем JSON издательства и их книг
        const fetchData_publishers = async () => {
            const res = await fetch(
                'api/publishers',
            );
            const json = await res.json();
            console.log(json);
            setPubs(json);
        };

        // Получаем JSON книги
        const fetchData_titles = async () => {
            const res = await fetch(
                'api/Titles',
            );
            const json = await res.json();
            console.log(json);
            setTitles(json);
        };

        fetchData_publishers();
        fetchData_titles();
    }, []);

    // Функция возвращающая выпадающий список издательств
    function ComboboxPubs() {
        return (<Autocomplete
            disablePortal
            id="combo-box-demo"
            options={pubs.$values}
            primaryKey='pubName'
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
        />)
    }

    // Функция возвращающая таблицу книг
    function TableTitles() {
        return (<div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Notes</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {titles.length != 0 && (
                            <ListTitles />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>)
    }

    // Функция для закрытия модального окна формы
    function onClose() {
        setOnShow(!onShow);
    }

    // Функция возвращая список книг
    function ListTitles() {
        return (titles.$values.map(t =>
            <TableRow
                key={t.titleId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {t.titleId}
                </TableCell>
                <TableCell align="right">{t.title1}</TableCell>
                <TableCell align="right">{t.notes}</TableCell>
                <TableCell align="right">{t.type}</TableCell>
                <TableCell align="right">{t.price}</TableCell>
                <TableCell align="center"><Button onClick={() => Delete(t)} variant="outlined"
                    color="error">
                    Delete
                </Button></TableCell>
            </TableRow>)
         )
    }

    // Функция удаления
    function Delete(item) {
        $.ajax({
            url: '/api/Titles/' + item.titleId,
            type: 'DELETE',
            success: function (result) {
                alert(result);
            }
        });
    }

    return (<div>
        <h1>Books</h1>
        {pubs.length != 0 && (
            <ComboboxPubs />
        )}
        <Button variant="contained" onClick={(e) => setOnShow(!onShow)}>
            Добавить
        </Button>
        {onShow && (
            <TitleForm onClose={onClose} titleId="" title="" type="" pub_id="" price="0" notes="" pubDate={Date.now} />
        )}
        {titles.length != 0 && (
            <TableTitles />
        )}
    </div>)
}