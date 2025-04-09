type BalanceProps = {
    amount: number;
}

export default function Balance({ amount }: BalanceProps) {
    return (
        <div style={{padding: '1rem', background: '#fff', borderRadius: '8px', marginTop: '1rem' }}>
            <h2>Balance:</h2>
            <p style={{fontSize: '2rem', color: amount >=0 ? 'green' : 'red'}}></p>
            R${amount.toFixed(2).replace('.', ',')}
        </div>
    )
};