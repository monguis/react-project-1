import React from "react";
import { Dropdown, InputGroup, DropdownButton, FormControl } from 'react-bootstrap';

const FilterInput = (props) => {
    console.log(props)
    return (
        <InputGroup className="mb-3">
            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title={props.values.key}
                id="input-group-dropdown-1"
            >
                {props.values.head.map(item => <Dropdown.Item
                    href="#"
                    key={item}
                    onClick={(e) => {
                        props.filterTable({ key: e.target.textContent })
                    }}
                >
                    {item}
                </Dropdown.Item>)}
            </DropdownButton>
            <FormControl onChange={(e) => {
                props.filterTable({ value: e.target.value });
            }} aria-describedby="basic-addon1" />
        </InputGroup>
    );
}
// index: 0,
// value: ""
export default FilterInput;

// 