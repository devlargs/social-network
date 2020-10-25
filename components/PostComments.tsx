import { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import { COMMENTS_BY_POST_ID } from "queries/comments";
import coercedGet from "utils/coercedGet";
import DangerousHTML from "components/styles/DangerousHTML";
import STORAGE from "constants/storage";

type Props = {
  id: string;
};

const PostComments = ({ id }: Props): ReactElement => {
  const { data, loading } = useQuery(COMMENTS_BY_POST_ID, {
    variables: {
      id,
    },
  });

  const posts = coercedGet(data, "posts", [{ comments: [] }])[0];

  return (
    <>
      {posts.comments.map((q: any, i: number) => (
        <div className="post-comment" key={i}>
          <img
            src={q?.creator?.avatar?.url}
            alt=""
            className="profile-photo-sm"
          />
          <p>
            <a href="#" className="profile-link">
              {q?.creator?.firstName} {q?.creator?.lastName}
            </a>{" "}
            <DangerousHTML html={q?.content?.html} />
          </p>
        </div>
      ))}
      <div className="post-comment">
        <img
          src={localStorage[STORAGE.USER_AVATAR]}
          alt=""
          className="profile-photo-sm"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Post a comment"
        />
      </div>
    </>
  );
};

export default PostComments;
