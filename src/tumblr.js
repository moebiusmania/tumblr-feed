'use strict';

export const loadTumblrFeed = (blog, cb, posts) => {
  const url = `https://${blog}.tumblr.com/api/read/json?callback=${cb}&num=${posts}`;
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.id = `tumblr-${blog}`;
  document.body.appendChild(script);
}
