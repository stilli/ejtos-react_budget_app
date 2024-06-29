import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const Currency = () => {
    const { dispatch, currency, currency_name } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    const currencyTitle = "Currency (" + currency + " " + currency_name + ")";

    return (
        <DropdownButton
            title={currencyTitle}
            id="dropdown-menu-align-left"
            onSelect={changeCurrency}
            variant="btn btn-secondary"
        >
            <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
            <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
            <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
        </DropdownButton>
    );
};

export default Currency;