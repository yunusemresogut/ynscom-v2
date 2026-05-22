export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  tags: string[];
  readTime: string;
  published: boolean;
  coverImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface DbPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[] | null;
  read_time: string;
  published: boolean;
  cover_image_url: string | null;
  created_at: string;
  updated_at: string;
}
