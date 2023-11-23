// resources/js/Pages/Transactions.js

import React from 'react';
import { Link } from '@inertiajs/react'
import ProfileLayout from '@/Layouts/ProfileLayout';

const Transactions = ({ user, transactions }) => {
  return (
    <ProfileLayout user={user}>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Transaction List</h1>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              {/* Display transaction details here */}
              Transaction ID: {transaction.id}, Amount: {transaction.amount}
            </li>
          ))}
        </ul>
      </div>
    </ProfileLayout>
  );
};

export default Transactions;
