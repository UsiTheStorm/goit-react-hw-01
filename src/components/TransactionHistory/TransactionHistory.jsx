import styles from './TransactionHistory.module.scss';

function Transaction({ transaction: { type, amount, currency } }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.transactionTableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.transactionTableBody}>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
