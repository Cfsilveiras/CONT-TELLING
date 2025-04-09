import Layout from './page';
import React from 'react';
import Header from '@/components/header';
import Balance from '@/components/balance';
import TransactionList from '@/components/transaction';

export default function Home() {
  const Currence = 1500; //TEMPORARIO
  

  const transaction = [
    {id: 1, description: 'Compra no mercado', amount: -200},
    {id: 2, description: 'Salario', amount: 3000},
    {id: 3, description: 'Conta de luz', amount: -150},
  ];

  return (
  <main>
    <Header />
    <Balance amount={Currence} />
    <TransactionList transaction={transaction} />
  </main> 
  );
}
