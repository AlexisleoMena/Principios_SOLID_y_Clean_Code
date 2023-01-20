import { JsonDatabaseService, LocalDataBaseService } from "./05-dependency-c";

export interface Post {
  body:   string;
  id:     number;
  title:  string;
  userId: number;
}


export class PostService {

  private posts: Post[] = [];

  constructor( private postProvider: JsonDatabaseService) {}

  async getPosts() {
    this.posts = await this.postProvider.getPosts();
    return this.posts;
  }
}