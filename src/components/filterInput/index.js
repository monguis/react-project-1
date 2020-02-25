import React from "react";
import { Dropdown, InputGroup, DropdownButton, FormControl } from 'react-bootstrap';

const FilterInput = (props) => {
    console.log(props.values)
    return (
        <InputGroup className="mb-3">
            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
            >
                {props.values.map(item=> <Dropdown.Item href="#">{item}</Dropdown.Item>)}
            </DropdownButton>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
    );
}

export default FilterInput;