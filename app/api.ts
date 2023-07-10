export const API_URL = "http://0.0.0.0:1337/api";

export interface PostsCollection {
  data: Array<{
    id: number;
    attributes: {
      title: string;
      content: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
    };
  }>;
}

export interface HeaderType {
  data: {
    id: number;
    attributes: {
      description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
    };
  };
}

export interface FooterType {
  data: {
    id: number;
    attributes: {
      links: Array<{
        id: number;
        name: string;
        url: string;
      }>;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
    };
  };
}
