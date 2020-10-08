import { useQuery } from "@apollo/react-hooks";
import { ACCOUNT } from "queries/accounts";
import coercedGet from "utils/coercedGet";

const ProfileCard = () => {
  const { data, loading, error } = useQuery(ACCOUNT, {
    variables: {
      id: "ckfxrhyao0ppz0185gv6gvxrl",
    },
  });

  const account = coercedGet(data, "account", {});

  return (
    <div className="profile-card">
      <img
        src={account?.avatar?.url}
        width={300}
        height={300}
        alt="user"
        className="profile-photo"
      />
      <h5>
        <a href="timeline" className="text-white">
          {account?.firstName} {account?.lastName}
        </a>
      </h5>
      <a href="#" className="text-white">
        <i className="ion ion-android-person-add"></i> 0 followers
      </a>
    </div>
  );
};

export default ProfileCard;
