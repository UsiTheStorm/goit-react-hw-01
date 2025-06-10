import styles from './Profile.module.scss';

function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={styles.userCard}>
      <div className={styles.userCardBody}>
        <img className={styles.userCardAvatar} src={avatar} alt={username} />
        <p className={styles.userCardName}>{username}</p>
        <p className={styles.userCardInfo}>@{tag}</p>
        <p className={styles.userCardInfo}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.statsLabel}>Followers</span>
          <span className={styles.statsValue}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsLabel}>Views</span>
          <span className={styles.statsValue}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsLabel}>Likes</span>
          <span className={styles.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
