import React from "react"


const TableBody = (props) => {
    return (
        <tbody>
            {props.body.map(item => {
                return (<tr>
                    {Object.values(item).map(value => (<td>{value}</td>))}
                </tr>)
            })}
        </tbody>);
}

export default TableBody;

