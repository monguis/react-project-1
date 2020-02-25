import React from "react";

const TableHead = (props) => {
    return (
        <thead>
            <tr onClick={(e) => { props.handleHead(e) }}>
                {
                    Object.keys(props.source).map(element => (<th sorted="desc">{element}</th>))
                }
            </tr>
        </thead>)
}

export default TableHead;