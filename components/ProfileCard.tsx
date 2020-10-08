const ProfileCard = () => (
  <div className="profile-card">
    <img
      src="https://pbs.twimg.com/profile_images/1268934390047899648/oQrBubFv_400x400.jpg"
      width={300}
      height={300}
      alt="user"
      className="profile-photo"
    />
    <h5>
      <a href="timeline" className="text-white">
        Nayeon
      </a>
    </h5>
    <a href="#" className="text-white">
      <i className="ion ion-android-person-add"></i> 1,299 followers
    </a>
  </div>
);

export default ProfileCard;
