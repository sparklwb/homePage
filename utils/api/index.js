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
  static getTagsByPage(data) {
    const path = `/blog/tags/page`;
    return this.comPost(path, data);
  }
}
