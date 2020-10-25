import CreatePostForm from "components/CreatePostForm";
import NewsFeedNav from "components/NewsFeedNav";
import PostContent from "components/PostContent";
import ProfileCard from "components/ProfileCard";
import SEO from "components/SEO";
import FollowSuggestions from "components/FollowSuggestions";
import fetchTokenData from "utils/fetchTokenData";
import checkPermission from "utils/checkPermission";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/reducers/auth";
import { useEffect } from "react";

const NewsFeed = ({ userId }: { userId: string | null }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectCurrentUser);

  useEffect(() => {
    checkPermission(userId, dispatch);
  }, [userId]);

  return (
    <>
      <SEO title="Newsfeed" />
      {data.userId && (
        <div id="page-contents">
          <div className="container">
            <div className="row">
              <div className="col-md-3 static">
                <ProfileCard />
                <NewsFeedNav />
              </div>

              <div className="col-md-7">
                <CreatePostForm />
                <PostContent />
              </div>

              <div className="col-md-2 static">
                <FollowSuggestions userId={userId} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

NewsFeed.getInitialProps = async ({ req }) => {
  const res = await (await fetchTokenData(req)).json();

  return {
    userId: res?.userId || null,
  };
};

export default NewsFeed;
