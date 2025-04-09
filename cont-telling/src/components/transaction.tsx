type Transaction = {
id: number;
description: string;
amount: number;

}

type TransactionProps = {
    transaction: Transaction[];
}

export default function TransactionList({ transaction }: TransactionProps) {
    return (
        <div style={{marginTop: '2rem'}}>
            <h2>Transactions</h2>
            <ul>
                {transaction.map((transaction) => (
                    <li key={transaction.id} style={{margin: '0.5rem 0'}}>
                    {transaction.description} - R$ {transaction.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
         )
        };