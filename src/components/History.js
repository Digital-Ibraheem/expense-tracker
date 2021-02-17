import React from 'react'
import { Transaction } from './Transaction'

export const History = () => {
    const dummyTransactions = [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ];
    return (
        <div>
            <h5 className='mt-3 pb-1' style={{ borderBottom: '2px solid #BBB' }}>History</h5>
            <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
                {dummyTransactions.map(a => (
                    <Transaction key={a.id} item={a} />
                ))}
            </ul>
        </div>
    )
}
