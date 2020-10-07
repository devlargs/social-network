const show = ["/newsfeed"];

const showable = () => {
  if (process.browser) {
    const pathname = location.pathname;
    return show.includes(pathname);
  }

  return false;
};

export default showable;
