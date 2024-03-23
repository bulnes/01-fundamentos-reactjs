interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostProps {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}
