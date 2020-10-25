import { useQuery } from "@apollo/react-hooks";
import { ACCOUNT } from "queries/accounts";
import coercedGet from "utils/coercedGet";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/reducers/auth";
import { DEFAULT_AVATAR_IMG } from "constants/links";
import ContentLoader from "./ContentLoader";
import capitalizeEachWord from "utils/capitalizeEachWord";
import { useEffect } from "react";
import STORAGE from "constants/storage";

const ProfileCard = () => {
  const { userId } = useSelector(selectCurrentUser);
  const { data, loading } = useQuery(ACCOUNT, {
    variables: {
      id: userId,
    },
  });

  const account = coercedGet(data, "account", {});
  const followers = coercedGet(account, "followers", []).length;

  useEffect(() => {
    localStorage.setItem(
      STORAGE.USER_AVATAR,
      account?.avatar?.url || DEFAULT_AVATAR_IMG
    );
  }, [account]);

  return (
    <div className="profile-card">
      {loading ? (
        <ContentLoader />
      ) : (
        <>
          <img
            src={account?.avatar?.url || DEFAULT_AVATAR_IMG}
            width={300}
            height={300}
            alt="user"
            className="profile-photo"
          />
          <h5>
            <a href="timeline" className="text-white">
              {capitalizeEachWord(account?.firstName)}{" "}
              {capitalizeEachWord(account?.lastName)}
            </a>
          </h5>
          <a href="#" className="text-white">
            <i className="ion ion-android-person-add"></i> {followers}{" "}
            {followers ? "followers" : "follower"}
          </a>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
