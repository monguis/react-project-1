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

    const [filter, setFilter] = useState({
        head: [],
        key: "",
        value: ""
    })

    useEffect(() => {
        API.search(props.source)
            .then(res => {

                setContent({
                    head: res.data.data[0],
                    body: res.data.data,
                    backup:res.data.data
                })
                const auxArr = Object.keys(res.data.data[0]);
                setFilter({
                    head: auxArr,
                    key:  auxArr[0],
                    value: ""
                })
                
            })
            .catch(err => {
                console.err(err);
            })
    }, [])

    // useEffect(() => {
    //     const auxArr = Object.keys(content.head);
    //     setFilter({
    //         head: auxArr,
    //         key: auxArr[0],
    //         value: ""
    //     })
    // }, [content])

    const handleHead = (e) => {
        const toCheck = e.target.innerText
        let auxArr;
        if (+content.head[toCheck]) {
            if (e.target.getAttribute("sorted") === "desc") {
                auxArr = content.body.sort((a, b) => a[toCheck] - b[toCheck]);
                e.target.setAttribute("sorted", "asc")
            } else {
                auxArr = content.body.sort((a, b) => b[toCheck] - a[toCheck]);
                e.target.setAttribute("sorted", "desc")
            }
        } else {
            if (e.target.getAttribute("sorted") === "desc") {
                auxArr = content.body.sort((a, b) => a[toCheck] < b[toCheck]);
                e.target.setAttribute("sorted", "asc")
            } else {
                auxArr = content.body.sort((a, b) => b[toCheck] < a[toCheck]);
                e.target.setAttribute("sorted", "desc")
            }
        }

        setContent({
            ...content,
            body: auxArr
        })
    }

    const handleFilter = (object) => {
        setFilter({
            ...filter,
            ...object
        })
    }
    const filterTable = (object) => {
        handleFilter(object);
        const auxArr = content.backup.filter((item) => item[filter.key].includes(filter.value))
        setContent({
            ...content,
            body: auxArr
        })
    }

    return (
        <>
            <FilterInput handleFilter={handleFilter} filterTable={filterTable} values={filter} />

            <Table striped bordered hover size="lg">
                <TableHead source={content.head} handleHead={handleHead} />
                <TableBody body={content.body} />
            </Table>
        </>);
}

export default TableAssembler;