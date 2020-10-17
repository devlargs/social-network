import CreatePostForm from "components/CreatePostForm";
import NewsFeedNav from "components/NewsFeedNav";
import PostContent from "components/PostContent";
import ProfileCard from "components/ProfileCard";
import SEO from "components/SEO";
import WhoToFollow from "components/WhoToFollow";
import fetchTokenData from "utils/fetchTokenData";
import checkPermission from "utils/checkPermission";
import { useEffect } from "react";

const NewsFeed = ({ userId }: { userId: string | null }) => {
  useEffect(() => {
    checkPermission(userId);
  }, [userId]);

  return (
    <>
      <SEO title="Newsfeed" />
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
              <WhoToFollow />
            </div>
          </div>
        </div>
      </div>
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
