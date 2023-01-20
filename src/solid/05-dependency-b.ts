import { JsonDatabaseService, LocalDataBaseService } from "./05-dependency-c";

export interface Post {
  body:   string;
  id:     number;
  title:  string;
  userId: number;
}


export class PostService {

  private posts: Post[] = [];

  constructor() {}

  async getPosts() {
    // const jsonDB = new LocalDataBaseService();
    const jsonDB = new JsonDatabaseService()

    // this.posts = await jsonDB.getFakePosts();
    this.posts = await jsonDB.getPosts();

    return this.posts;
  }
}