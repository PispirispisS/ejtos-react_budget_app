import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
    };

    return (
        <div className='alert alert-info'>
            <span>Currency: </span>
            <select className='custom-select' onChange={handleCurrencyChange}>
                <option value='£'>Pound (£)</option>
                <option value='$'>Dollar ($)</option>
                <option value='€'>Euro (€)</option>
                <option value='₹'>Ruppee (₹)</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;

