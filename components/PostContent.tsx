import { useQuery } from "@apollo/react-hooks";
import { POSTS } from "queries/posts";
import coercedGet from "utils/coercedGet";
import dayjs from "dayjs";
import DangerousHTML from "components/styles/DangerousHTML";
import PostComments from "components/PostComments";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/reducers/auth";
import { selectFriends } from "store/reducers/friends";
import ContentLoader from "./ContentLoader";
import NoPosts from "./NoPosts";

const PostContent = () => {
  const { data: friends } = useSelector(selectFriends);
  const { userId } = useSelector(selectCurrentUser);

  const { data, loading } = useQuery(POSTS, {
    variables: {
      friends: [...friends, userId],
    },
  });
  const posts = coercedGet(data, "posts", []);

  return (
    <>
      {loading ? (
        <>
          {Array.from({ length: 5 }).map((q) => {
            return (
              <div
                style={{
                  marginBottom: 20,
                  padding: 20,
                  background: "#CCCCCC",
                  borderRadius: 10,
                }}
              >
                <ContentLoader height={100} width={600} />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {posts.length ? (
            <>
              {posts.map((q: any, i: number) => (
                <div key={i}>
                  <div className="post-content">
                    <div className="post-container">
                      <img
                        src={q?.creator?.avatar?.url || ""}
                        alt="user"
                        className="profile-photo-md pull-left"
                      />
                      <div className="post-detail">
                        <div className="user-info">
                          <h5>
                            <a href="#" className="profile-link">
                              {q?.creator?.firstName} {q?.creator?.lastName}
                            </a>
                            {q?.creator?.id !== userId && (
                              <span className="following">following</span>
                            )}
                          </h5>
                          <p className="text-muted">
                            published {dayjs(q.createdAt).fromNow()}
                          </p>
                        </div>
                        <div className="reaction">
                          <a className="btn text-green">
                            <i className="icon ion-thumbsup"></i>{" "}
                            {q?.likes?.length || 0}
                          </a>
                        </div>
                        <div className="line-divider"></div>
                        <div className="post-text">
                          <p>
                            <i className="em em-thumbsup"></i>{" "}
                            <i className="em em-thumbsup"></i>
                            <DangerousHTML html={q?.content?.html} />
                          </p>
                        </div>
                        <div className="line-divider" />
                        <PostComments id={q.id} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <NoPosts />
          )}
        </>
      )}
    </>
  );
};

export default PostContent;
