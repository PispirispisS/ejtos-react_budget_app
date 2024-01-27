import React, { useContext } from 'react';
import { BsPlus } from 'react-icons/bs';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDecreaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    const increaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {currency} {props.cost}
            </td>
            <td>
                <button
                    onClick={increaseAllocation}
                    className="btn btn-primary"
                    style={{
                        marginRight: '5px',
                        padding: '5px',
                        borderRadius: '5px', // Puntas redondeadas con esquinas cuadradas
                        border: 'none',
                        fontWeight: 'bold', // Hace el símbolo "+" más rellenito
                    }}
                >
                    <BsPlus size='1.2em' />
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={handleDecreaseAllocation}
                    style={{
                        borderRadius: '5px', // Puntas redondeadas con esquinas cuadradas
                    }}
                >
                    -
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;







            










