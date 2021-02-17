import React from 'react'

export const Transaction = ({ item }) => {
    return (
        <div>
            <li className='bg-light p-3 mb-3 shadow' style={{ borderRight: `6px solid ${item.amount > 0 ? '#2ecc71' : '#c0392b'}` }}>
                {item.text}
                <span className='float-right'>
                    {item.amount > 0 ? `+${item.amount}` : item.amount}
                </span>
            </li>
            <button className="delete-btn">x</button>
        </div>
    )
}
