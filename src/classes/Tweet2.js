export default class Tweet2 {
    //private variables
    #message = "";
    #gravatar = "";
    #author = {};
    #likes = 0;
    #retweets = 0;
    #timestamp = "";
  
    Author(value) {
      this.#author = { name: value.name, handle: value.handle };
      return this;
    }
    Message = (value) => {
      this.#message = value;
      return this;
    };
    Gravatar = (value) => {
      this.#gravatar = value;
      return this;
    };
    Likes = (value) => {
      this.#likes = value;
      return this;
    };
    Retweets = (value) => {
      this.#retweets = value;
      return this;
    };
    Timestamp = (value) => {
      this.#timestamp = value;
      return this;
    };
  
    get author() {
      return this.#author;
    }
    get message() {
      return this.#message;
    }
    get likes() {
      return this.#likes;
    }
    get gravatar() {
      return this.#gravatar;
    }
    get retweets() {
      return this.#retweets;
    }
    get timestamp() {
      return this.#timestamp;
    }
  }
  