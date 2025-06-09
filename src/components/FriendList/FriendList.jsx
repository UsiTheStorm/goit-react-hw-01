import styles from './FriendList.module.scss';

function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <li className={styles.friendCard}>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.friendCardName}>{name}</p>
      <p className={styles.friendCardStatus}>
        {isOnline ? (
          <span className={styles.online}>Online</span>
        ) : (
          <span className={styles.offline}>Offline</span>
        )}
      </p>
    </li>
  );
}

function FriendList({ friends }) {
  console.log('freeeeeee', { friends });
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendList;
