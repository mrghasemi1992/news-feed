export interface Post {
  id: number;
  created_time: string;
  content: string;
  author: User;
  reactions: {
    likes: number;
    comments: Comment[];
  };
  image_url: string;
}

export interface User {
  id: number;
  firstName: string;
  familyName: string;
  username: string;
  profile_photo_url: string;
}

export interface Comment {
  id: number;
  author: User;
  created_time: string;
  content: string;
}
