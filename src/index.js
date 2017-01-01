'use strict';

// import 'skatejs-web-components';
import { Component } from 'skatejs';
import { loadTumblrFeed } from './tumblr';
// import * as skate from 'skatejs';

class TumblrFeed extends Component {
  static get props () {
    return {
      blog: {
        attribute: true,
        default: 'staff'
      },
      callback: {
        attribute: true,
        default: 'tumblr'
      },
      posts: {
        attribute: true,
        default: 10
      }
    };
  }

  connectedCallback () {
    super.connectedCallback();

    loadTumblrFeed(this.blog, this.callback, this.posts);

    // const script = document.querySelector(`#tumblr-${this.blog}`);
    // script.addEventListener('load', (evt) => {
    //   this.dispatchEvent(new CustomEvent('tumblr-feed-attached'));
    // });
  }

}

customElements.define('tumblr-feed', TumblrFeed);

export default TumblrFeed;
