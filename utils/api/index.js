import config from "./config";

export default class Api extends config {
  static login(data) {
    const path = `/blog/login`;
    return this.comPost(path, data);
  }
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
  static updateBlog(id, data) {
    const path = `/blog/${id}`;
    return this.comPost(path, data);
  }
  static getBlogByPage(data) {
    const path = `/blog/page`;
    return this.comPost(path, data);
  }
}
