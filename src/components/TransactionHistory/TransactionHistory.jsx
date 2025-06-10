import styles from './TransactionHistory.module.scss';

function capitalizeFirstLetter(str) {
  if (typeof str === 'string' && str.length > 0) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return str;
}

function Transaction({ transaction: { type, amount, currency } }) {
  return (
    <tr>
      <td>{capitalizeFirstLetter(type)}</td>
      <td>{amount}</td>
      <td>{currency.toUpperCase().trim()}</td>
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
