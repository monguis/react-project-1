import React from "react"


const TableBody = (props) => {
    return (
        <tbody>
            {props.body.map((item , ind) => {
                return (<tr key={ind}>
                    {Object.values(item).map((value,ind2) => (<td key={ind2}>{value}</td>))}
                </tr>)
            })}
        </tbody>);
}

export default TableBody;

