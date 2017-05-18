'use strict';

import { loadTumblrFeed } from './tumblr';

class TumblrFeed extends HTMLElement {
  
  constructor(){
    super();
    this.state = {
      blog: this.getAttribute('blog') || 'staff',
      callback: this.getAttribute('callback') || 'tumblr',
      posts: this.getAttribute('posts') || 10
    }
  }

  connectedCallback () {
    this._addScript();
  }

  _addScript(){
    this.dispatchEvent(new CustomEvent('tumblr-feed-attached'));
    this._checkMinimum();
    loadTumblrFeed(this.state.blog, this.state.callback, this.state.posts);
  }

  _checkMinimum(){
    const n = parseInt(this.state.posts);
    n < 0 ? this.state.posts = 0 : null;
  }

}

customElements.define('tumblr-feed', TumblrFeed);