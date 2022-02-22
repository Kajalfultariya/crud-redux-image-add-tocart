export default class Tweet {
    //private variable
    #message = "";
    gravatar = "";
    author = {};
    likes = 0;
    retweets = 0;
    timestamp = "";
  
    get Author() {
      return this.author;
    }
  
    get message() {
      return this.#message;
    }
  
    set message(value) {
      if (value.trim().length > 11) {
        this.#message = `${value.substr(0, 8)}...`;
        return;
      }
      this.#message = value;
    }
  }
  