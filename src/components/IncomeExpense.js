import React from 'react'

export const IncomeExpense = () => {
    return (
        <div className='bg-light p-3 rounded shadow'>
            <div className='bg-light row justify-content-center'>
                <h6 className='bg-light col-3'>INCOME</h6>
                <h6 className='bg-light col-3'>EXPENSE</h6>
            </div>
            <div className='bg-light row justify-content-center'>
                <h6 className='bg-light col-3' style={{ color: 'limegreen' }}>$500.00</h6>
                <h6 className='bg-light col-3' style={{ color: 'red' }}>$100.00</h6>
            </div>
        </div>
    )
}
