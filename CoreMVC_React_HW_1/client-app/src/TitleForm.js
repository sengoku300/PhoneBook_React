import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./App.css";
import $ from 'jquery';

const Input = styled("input")({
    display: "none",
});

export default function TitleForm(props) {
    const [title_id, setTitleId] = useState(props.titleId);
    const [title, setTitle] = useState(props.title);
    const [type, setType] = useState(props.type);
    const [pub_id, setPubId] = useState(props.pubId);
    const [price, setPrice] = useState(props.pric);
    const [notes, setNotes] = useState(props.notes);
    const [pubdate, setPubDate] = useState(props.pubdate);

    function buttonPress(e) {
        $.ajax({
            type: 'POST',
            url: "api/Titles",
            data: {
                title_id: title_id,
                title: title,
                type: type,
                pub_id: pub_id,
                price: price,
                notes: notes,
                pubdate: pubdate,
            }
        });
        props.onClose();
    }

    return (<div className="modalOverlay">
        <div className="modal_cl">
                    <TextField
                        id="outlined-basic"
                        label="TitleId"
                        variant="outlined"
                value={title_id}
                fullWidth
                        onChange={(e) => {
                            setTitleId(e.target.value);
                        }}
                        focused
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                value={title}
                fullWidth
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        focused
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Type"
                        variant="outlined"
                        value={type}
                        fullWidth
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                        focused
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="PubId"
                        variant="outlined"
                        value={pub_id}
                        fullWidth
                        onChange={(e) => {
                            setPubId(e.target.value);
                        }}
                        focused
                    />
                    <br />
                    <br />
                    <TextField
                        type="number"
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        value={price}
                        fullWidth
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        focused
                    />
                    <br />
                    <br />
                    <TextField
                        type="text"
                        id="outlined-basic"
                        label="Notes"
                        variant="outlined"
                        value={notes}
                        fullWidth
                        onChange={(e) => {
                            setNotes(e.target.value);
                        }}
                        focused
                    />
                    <br />
                    <br />
                <TextField
                    id="date"
                    label="PubDate"
                type="date"
                fullWidth
                    value={pubdate}
                    defaultValue="2017-05-24"
                    onChange={(e) => { setPubDate(e.target.value) }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <br />
                    <br />
                    <Button
                        class="button_save"
                        onClick={(e) => buttonPress(e)}
                        variant="contained">
                        Сохранить
                    </Button>
                    <br />
                    <br />
                    <Button
                        class="button_cancel"
                        onClick={(e) => props.onClose()}
                        variant="text">
                        Отменить
                    </Button>
            </div>
    </div>)
}