import { DEFAULT_AVATAR_IMG } from "constants/links";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts, selectAccounts } from "store/reducers/accounts";
import { selectFriends } from "store/reducers/friends";
import styled from "styled-components";
import capitalizeEachWord from "utils/capitalizeEachWord";

type FollowCardProps = {
  name: string;
  avatar: string;
  id: string;
};

const FollowCard = ({ name, avatar, id }: FollowCardProps) => (
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
        <a>{capitalizeEachWord(name)}</a>
      </h5>
      <FollowAnchor className="text-green" onClick={() => console.log(id)}>
        Follow
      </FollowAnchor>
    </div>
  </div>
);

const FollowSuggestions = ({ userId }: { userId?: string }) => {
  const dispatch = useDispatch();
  const { data = [] } = useSelector(selectAccounts);
  const { data: friends } = useSelector(selectFriends);

  useEffect(() => {
    if (userId) {
      dispatch(
        getAccounts({
          first: 10,
          after: null,
          userId: [userId, ...friends],
        })
      );
    }
  }, [userId, friends]);

  return (
    <div className="suggestions" id="sticky-sidebar">
      <h5 className="grey">Follow Suggestions</h5>
      {data?.map((q: any, i: number) => (
        <div key={i}>
          <FollowCard
            id={q?.id}
            name={`${q?.firstName} ${q?.lastName}`}
            avatar={q?.avatar?.url || DEFAULT_AVATAR_IMG}
          />
        </div>
      ))}
    </div>
  );
};

const FollowAnchor = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export default FollowSuggestions;
