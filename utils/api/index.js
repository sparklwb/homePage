import config from "./config";

export default class Api extends config {
  static upload(data) {
    const path = `/blog/upload`;
    return this.comPost(path, data);
  }
  static addTags(data) {
    const path = `/blog/tags`;
    return this.comPost(path, data);
  }
  static getTags() {
    const path = `/blog/tags`;
    return this.comGet(path);
  }
  static addBlog(data) {
    const path = `/blog`;
    return this.comPost(path, data);
  }
}
