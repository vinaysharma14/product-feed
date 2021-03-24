interface Post {
  id: string;
  name: string;
  price: number;
  blocked: boolean;
  publishDate: typeof Date;
}

type Ratings = 1 | 2 | 3 | 4 | 5;

interface Seller {
  id: string;
  name: string;
  posts: Post[]
  rating: Ratings;
}

type Sellers = Seller[];

export { Post, Sellers };
