import React, { useEffect } from "react";

const TableHead = (props) => {
    return (
        <thead>
            <tr>
                {
                    Object.keys(props.source).map(element => (<th>{element}</th>))
                }
            </tr>
        </thead>)
}

export default TableHead;