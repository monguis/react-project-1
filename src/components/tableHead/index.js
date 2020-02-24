import React ,{useEffect} from "react";

const TableHead = (props) => {
    console.log(Object.keys(props.source))


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