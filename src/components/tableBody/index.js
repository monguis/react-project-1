import React from "react"


const TableBody = (props) => {
    console.log(props.body);
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

