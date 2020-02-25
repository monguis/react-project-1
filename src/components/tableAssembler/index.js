import React, { useState, useEffect } from 'react';
import TableHead from "../tableHead/";
import TableBody from "../tableBody/";
import { Table } from 'react-bootstrap';
import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterInput from "../filterInput/"


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
        let auxArr;
        if (+content.head[e.target.innerText]) {
            if (e.target.getAttribute("sorted") === "desc") {
                auxArr = content.body.sort((a, b) => a[e.target.innerText] - b[e.target.innerText]);
                e.target.setAttribute("sorted", "asc")
            } else {
                auxArr = content.body.sort((a, b) => b[e.target.innerText] - a[e.target.innerText]);
                e.target.setAttribute("sorted", "desc")
            }
        } else {
            if (e.target.getAttribute("sorted") === "desc") {
                auxArr = content.body.sort((a, b) => a[e.target.innerText] < b[e.target.innerText]);
                e.target.setAttribute("sorted", "asc")
            } else {
                auxArr = content.body.sort((a, b) => b[e.target.innerText] < a[e.target.innerText]);
                e.target.setAttribute("sorted", "desc")
            }
        }

        setContent({
            ...content,
            body: auxArr
        })
    }

    const handleInput = () =>{
console.log("yessir")
    }

    return (
<>
        <FilterInput handleInput = {handleInput} values = {Object.keys(content.head)}/>

        <Table striped bordered hover size="lg">
            <TableHead source={content.head} handleHead={handleHead}  />
            <TableBody body={content.body} />
        </Table>
        </>);
}

export default TableAssembler;