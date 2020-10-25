import { DEFAULT_AVATAR_IMG } from "constants/links";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts, selectAccounts } from "store/reducers/accounts";
import { addFriend, selectFriends } from "store/reducers/friends";
import styled from "styled-components";
import capitalizeEachWord from "utils/capitalizeEachWord";

const FollowSuggestions = ({ userId }: { userId?: string }) => {
  const dispatch = useDispatch();
  const { data = [] } = useSelector(selectAccounts);
  const { data: friends, addLoading } = useSelector(selectFriends);

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
        <div className="follow-user" key={i}>
          <img
            width={300}
            height={300}
            src={q?.avatar?.url || DEFAULT_AVATAR_IMG}
            alt=""
            className="profile-photo-sm pull-left"
          />
          <div>
            <h5>
              <a>{capitalizeEachWord(`${q?.firstName} ${q?.lastName}`)}</a>
            </h5>
            {addLoading[q?.id] ? (
              <FollowAnchor text-green>
                <span className="fa fa-gear fa-spin" /> Requesting ...
              </FollowAnchor>
            ) : (
              <FollowAnchor
                className="text-green"
                onClick={() =>
                  dispatch(
                    addFriend({
                      followerId: userId,
                      followingId: q?.id,
                    })
                  )
                }
              >
                Follow
              </FollowAnchor>
            )}
          </div>
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
