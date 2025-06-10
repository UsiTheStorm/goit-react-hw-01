import clsx from 'clsx';
import styles from './FriendList.module.scss';

function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <li className={styles.friendCard}>
      <img src={avatar} alt={name} width={80} />
      <p className={styles.friendCardName}>{name}</p>
      <p
        className={clsx(styles.friendCardStatus, {
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendList;
