import React, { useState, useEffect } from 'react';
import TableHead from "../tableHead/";
import TableBody from "../tableBody/";
import { Table } from 'react-bootstrap';
import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';


const TableAssembler = (props) => {
    const [content, setContent] = useState({
        head: {},
        body: []
    })

    useEffect(() => {
        API.search(props.source)
            .then(res => {
                setContent({
                    head: res.data.data[0],
                    body: res.data.data
                })
            })
            .catch(err => {
                console.err(err);
            })
    }, [])

    const handleHead = (e) => {
        let auxArr = content.body.sort((a, b) => a[e.target.innerText] < b[e.target.innerText]);

        if (+content.head[e.target.innerText]) {
            auxArr = content.body.sort((a, b) => a[e.target.innerText] - b[e.target.innerText]);
        } else {
            auxArr = content.body.sort((a, b) => a[e.target.innerText] < b[e.target.innerText]);
        }

        setContent({
            ...content,
            body: auxArr
        })
    }

    return (
        <Table striped bordered hover size="lg">
            <TableHead source={content.head} handleHead={handleHead} />
            <TableBody body={content.body} />
        </Table>);
}

export default TableAssembler;