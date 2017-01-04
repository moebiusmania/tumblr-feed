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
    this._addScript();
  }

  _addScript(){
    this.dispatchEvent(new CustomEvent('tumblr-feed-attached'));
    this._checkMinimum();
    loadTumblrFeed(this.blog, this.callback, this.posts);
  }

  _checkMinimum(){
    const n = parseInt(this.posts);
    n < 0 ? this.posts = 0 : null;
  }

}

customElements.define('tumblr-feed', TumblrFeed);

export default TumblrFeed;
