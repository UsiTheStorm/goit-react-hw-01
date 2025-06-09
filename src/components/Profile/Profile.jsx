import './Profile.scss';

function Profile({ user: { username, tag, location, avatar, stats } }) {
  return (
    <div className="user-card">
      <div className="user-card__body">
        <img className="user-card__avatar" src={avatar} alt={username} />
        <p className="user-card__name">{username}</p>
        <p className="user-card__info">@{tag}</p>
        <p className="user-card__info">{location}</p>
      </div>

      <ul className="user-card__stats stats">
        <li>
          <span className="stats__label">Followers</span>
          <span className="stats__value">{stats.followers}</span>
        </li>
        <li>
          <span className="stats__label">Views</span>
          <span className="stats__value">{stats.views}</span>
        </li>
        <li>
          <span className="stats__label">Likes</span>
          <span className="stats__value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
