import { DEFAULT_AVATAR_IMG } from "constants/links";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts, selectAccounts } from "store/reducers/accounts";
import capitalizeEachWord from "utils/capitalizeEachWord";

type FollowCardProps = {
  name: string;
  avatar: string;
};

const FollowCard = ({ name, avatar }: FollowCardProps) => (
  <div className="follow-user">
    <img
      width={300}
      height={300}
      src={avatar}
      alt=""
      className="profile-photo-sm pull-left"
    />
    <div>
      <h5>
        <a href="timeline">{capitalizeEachWord(name)}</a>
      </h5>
      <a href="#" className="text-green">
        Follow
      </a>
    </div>
  </div>
);

const FollowSuggestions = ({ userId }: { userId?: string }) => {
  const dispatch = useDispatch();
  const { data = [] } = useSelector(selectAccounts);

  useEffect(() => {
    if (userId) {
      dispatch(
        getAccounts({
          first: 10,
          after: null,
          userId,
        })
      );
    }
  }, [userId]);

  return (
    <div className="suggestions" id="sticky-sidebar">
      <h5 className="grey">Follow Suggestions</h5>
      {data?.map((q: any) => (
        <FollowCard
          name={`${q.firstName} ${q.lastName}`}
          avatar={q?.avatar?.url || DEFAULT_AVATAR_IMG}
        />
      ))}
    </div>
  );
};

export default FollowSuggestions;
