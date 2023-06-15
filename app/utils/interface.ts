export interface Post {
  posts: {
    createdAt: string;
    id: string;
    overview: string;
    title: string;
    slug: string;
  }[];
}

export interface PostId {
  post: {
    id: string;
    overview: string;
    title: string;
    slug: string;
    publishedAt: string;
    body: any;
  };
}

export interface Project {
  proejcts: {
    id: string;
    link: string;
    title: string;
    overview: string;
    titleImage: {
      url: string;
    };
    publishedAt: string;
  }[];
}
