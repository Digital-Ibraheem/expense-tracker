import React from 'react'

export const NewTransaction = () => {
    return (
        <div className='mb-4'>
            <h5 className='mt-4 pb-1' style={{ borderBottom: '2px solid #BBB' }}>Add new transaction</h5>
            <form>
                <div className='form-group'>
                    <label for='transactionText'>Text</label>
                    <input type='text' className='form-control' placeholder='Enter Text' id='transactionText' />
                </div>
                <div className='form-group'>
                    <label for='transactionAmount'>Amount (negative - expense, positive - income)</label>
                    <input type='number' className='form-control' placeholder='Enter Amount' id='transactionAmount' />
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>Add Transaction</button>
            </form>
        </div>
    )
}
