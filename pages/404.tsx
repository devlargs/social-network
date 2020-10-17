import Link from "next/link";

const ErrorPage = () => (
  <>
    {" "}
    <div className="error-page">
      <div className="error-content">
        <div className="container">
          <img src="images/404.png" alt="" className="img-responsive" />
          <div className="error-message">
            <h1 className="error-title">Whoops!</h1>
            <p>
              Looks like you are lost. But don't worry there is plenty to see!!
            </p>
            <Link href="/newsfeed">Newsfeed</Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ErrorPage;
