import CreatePostForm from "components/CreatePostForm";
import NewsFeedNav from "components/NewsFeedNav";
import PostContent from "components/PostContent";
import ProfileCard from "components/ProfileCard";
import WhoToFollow from "components/WhoToFollow";

const NewsFeed = () => {
  return (
    <>
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

export default NewsFeed;
