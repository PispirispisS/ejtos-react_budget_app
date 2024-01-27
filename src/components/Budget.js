import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        if (updatedBudget <= 20000) {
            if (updatedBudget >= totalExpenses) {
                setNewBudget(updatedBudget);
                dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
            } else {
                alert("Budget cannot be lower than total expenses!");
            }
        } else {
            alert("Maximum budget limit exceeded! Maximum allowed: £20,000");
        }
    };

    return (
        <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
            <span>Budget:{currency} {budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                max="20000"
                className="form-control"
                style={{ width: '100px' }}
            />
        </div>
    );
};

export default Budget;

















