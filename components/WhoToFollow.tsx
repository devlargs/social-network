type FollowCardProps = {
  name: string;
};

const FollowCard = ({ name }: FollowCardProps) => (
  <div className="follow-user">
    <img
      src="http://placehold.it/300x300"
      alt=""
      className="profile-photo-sm pull-left"
    />
    <div>
      <h5>
        <a href="timeline.html">{name}</a>
      </h5>
      <a href="#" className="text-green">
        Add friend
      </a>
    </div>
  </div>
);

const WhoToFollow = () => (
  <div className="suggestions" id="sticky-sidebar">
    <h4 className="grey">Who to Follow</h4>
    <FollowCard name="Brennan Baroy" />
    <FollowCard name="Ralph Largo" />
    <FollowCard name="Harley" />
    <FollowCard name="Zad Kiel" />
    <FollowCard name="Jae Ballarbare" />
    <FollowCard name="Harvee Golfo" />
    <FollowCard name="CJ Paulo Sotto" />
  </div>
);

export default WhoToFollow;
