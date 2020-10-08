import { useQuery } from "@apollo/react-hooks";
import { POSTS } from "queries/posts";
import coercedGet from "utils/coercedGet";
import dayjs from "dayjs";
import styled from "styled-components";
import PostComments from "components/PostComments";

const PostContent = () => {
  const { data, loading } = useQuery(POSTS);
  const posts = coercedGet(data, "posts", []);

  console.log(posts, loading);

  return (
    <>
      {/* <div className="post-content">
        <img
          src="http://placehold.it/1920x1280"
          alt="post-image"
          className="img-responsive post-image"
        />
        <div className="post-container">
          <img
            src="http://placehold.it/300x300"
            alt="user"
            className="profile-photo-md pull-left"
          />
          <div className="post-detail">
            <div className="user-info">
              <h5>
                <a href="#" className="profile-link">
                  Alexis Clark
                </a>{" "}
                <span className="following">following</span>
              </h5>
              <p className="text-muted">Published a photo about 3 mins ago</p>
            </div>
            <div className="reaction">
              <a className="btn text-green">
                <i className="icon ion-thumbsup"></i> 13
              </a>
              <a className="btn text-red">
                <i className="fa fa-thumbs-down"></i> 0
              </a>
            </div>
            <div className="line-divider"></div>
            <div className="post-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
                <i className="em em-anguished"></i>{" "}
                <i className="em em-anguished"></i>{" "}
                <i className="em em-anguished"></i>
              </p>
            </div>
            <div className="line-divider"></div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  Diana{" "}
                </a>
                <i className="em em-laughing"></i> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud{" "}
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  John
                </a>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud{" "}
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Post a comment"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="post-content">
        <div className="video-wrapper">
          <video className="post-video" controls>
            {" "}
            <source
              src="https://www.youtube.com/embed/wE69xzIxNHY"
              type="video/mp4"
            />{" "}
          </video>
        </div>
        <div className="post-container">
          <img
            src="http://placehold.it/300x300"
            alt="user"
            className="profile-photo-md pull-left"
          />
          <div className="post-detail">
            <div className="user-info">
              <h5>
                <a href="#" className="profile-link">
                  Sophia Lee
                </a>{" "}
                <span className="following">following</span>
              </h5>
              <p className="text-muted">Updated her status about 33 mins ago</p>
            </div>
            <div className="reaction">
              <a className="btn text-green">
                <i className="icon ion-thumbsup"></i> 75
              </a>
              <a className="btn text-red">
                <i className="fa fa-thumbs-down"></i> 8
              </a>
            </div>
            <div className="line-divider"></div>
            <div className="post-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="line-divider"></div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  Olivia{" "}
                </a>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <i className="em em-anguished"></i> Ut enim ad minim veniam, quis
                nostrud{" "}
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  Sarah
                </a>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  Linda
                </a>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Post a comment"
              />
            </div>
          </div>
        </div>
      </div> */}

      {posts.map((q: any) => (
        <>
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
                    </a>{" "}
                    {/* // TODO - Check if this is you or someone you follow
                    <span className="following">following</span> */}
                  </h5>
                  <p className="text-muted">
                    published {dayjs(q.createdAt).fromNow()}
                  </p>
                </div>
                <div className="reaction">
                  <a className="btn text-green">
                    <i className="icon ion-thumbsup"></i> 0
                  </a>
                  <a className="btn text-red">
                    <i className="fa fa-thumbs-down"></i> 0
                  </a>
                </div>
                <div className="line-divider"></div>
                <div className="post-text">
                  <p>
                    <i className="em em-thumbsup"></i>{" "}
                    <i className="em em-thumbsup"></i>
                    <DangerousHTML
                      dangerouslySetInnerHTML={{
                        __html: q?.content?.html,
                      }}
                    />
                  </p>
                </div>
                <div className="line-divider" />
                <PostComments id={q.id} />
              </div>
            </div>
          </div>
        </>
      ))}

      {/* <div className="post-content">
        <img
          src="http://placehold.it/2000x1300"
          alt="post-image"
          className="img-responsive post-image"
        />
        <div className="post-container">
          <img
            src="http://placehold.it/300x300"
            alt="user"
            className="profile-photo-md pull-left"
          />
          <div className="post-detail">
            <div className="user-info">
              <h5>
                <a href="#" className="profile-link">
                  John Doe
                </a>{" "}
                <span className="following">following</span>
              </h5>
              <p className="text-muted">Published a photo about 2 hour ago</p>
            </div>
            <div className="reaction">
              <a className="btn text-green">
                <i className="icon ion-thumbsup"></i> 39
              </a>
              <a className="btn text-red">
                <i className="fa fa-thumbs-down"></i> 2
              </a>
            </div>
            <div className="line-divider"></div>
            <div className="post-text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                eos qui ratione voluptatem sequi nesciunt
              </p>
            </div>
            <div className="line-divider"></div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  Brian{" "}
                </a>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.{" "}
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  Richard
                </a>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Post a comment"
              />
            </div>
          </div>
        </div>
      </div>
  
      <div className="post-content">
        <div className="google-maps">
          <div id="map" className="map"></div>
        </div>
        <div className="post-container">
          <img
            src="http://placehold.it/300x300"
            alt="user"
            className="profile-photo-md pull-left"
          />
          <div className="post-detail">
            <div className="user-info">
              <h5>
                <a href="#" className="profile-link">
                  Sophia Lee
                </a>{" "}
                <span className="following">following</span>
              </h5>
              <p className="text-muted">
                <i className="icon ion-ios-location"></i> Went to Niagara Falls
                today
              </p>
            </div>
            <div className="reaction">
              <a className="btn text-green">
                <i className="icon ion-thumbsup"></i> 17
              </a>
              <a className="btn text-red">
                <i className="fa fa-thumbs-down"></i> 0
              </a>
            </div>
            <div className="line-divider"></div>
            <div className="post-text">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio.
              </p>
            </div>
            <div className="line-divider"></div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  Sarah{" "}
                </a>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. <i className="em em-blush"></i>{" "}
                <i className="em em-blush"></i>{" "}
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Post a comment"
              />
            </div>
          </div>
        </div>
      </div>
  
      <div className="post-content">
        <img
          src="http://placehold.it/1920x1160"
          alt=""
          className="img-responsive post-image"
        />
        <div className="post-container">
          <img
            src="http://placehold.it/300x300"
            alt="user"
            className="profile-photo-md pull-left"
          />
          <div className="post-detail">
            <div className="user-info">
              <h5>
                <a href="#" className="profile-link">
                  Anna Young
                </a>{" "}
                <span className="following">following</span>
              </h5>
              <p className="text-muted">Published a photo about 4 hour ago</p>
            </div>
            <div className="reaction">
              <a className="btn text-green">
                <i className="icon ion-thumbsup"></i> 2
              </a>
              <a className="btn text-red">
                <i className="fa fa-thumbs-down"></i> 0
              </a>
            </div>
            <div className="line-divider"></div>
            <div className="post-text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="line-divider"></div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <p>
                <a href="#" className="profile-link">
                  Julia{" "}
                </a>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga.
              </p>
            </div>
            <div className="post-comment">
              <img
                src="http://placehold.it/300x300"
                alt=""
                className="profile-photo-sm"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Post a comment"
              />
            </div>
          </div>
        </div>
      </div>
    */}
    </>
  );
};

const DangerousHTML = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export default PostContent;
