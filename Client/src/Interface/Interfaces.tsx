export interface IUser {
  _id: string;
  username: string;
  password: string;
  image: string;
}

export interface IComment {
  content: string;
  author: string;
}

export interface IPuzzels {
  _id: string;
  img?: string;
  title: string;
  content: string;
  author: string;
  comments: IComment[];
}
