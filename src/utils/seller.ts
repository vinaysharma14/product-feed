import { Post, Sellers } from '../types';

export let sellers: Sellers = [];

const getSellerIndex = (sellerId: string) => sellers.findIndex(({ id }) => id === sellerId);
const getPostIndex = (sellerIndex: number, postId: string) => sellers[sellerIndex].posts.findIndex(({ id }) =>id === postId );

const createSeller = (name: string) => {
  if (name) {
    sellers.push({
      // todo: unique id & random rating
      name,
      id: '10',
      rating: 1,
      posts: [],
    });
  }
};

const deleteSeller = (sellerId: string) => {
  if (sellerId) {
    sellers = sellers.filter(({ id }) => id !== sellerId);
  }
};

const publishPost = (sellerId: string, post: Post) => {
  const index = getSellerIndex(sellerId);

  if (index >= 0) {
    sellers[0].posts.push(post);
  }
};

const deletePost = (sellerId: string, postId: string) => {
  const index = getSellerIndex(sellerId);

  if (index >= 0) {
    let { posts } = sellers[index];
    sellers[index].posts = posts.filter(({ id }) => id !== postId);
  }
};

const togglePostBlock = (sellerId: string, postId: string, operation: 'block' | 'unblock') => {
  const index = getSellerIndex(sellerId);

  if (index) {
    const sellerIndex = getSellerIndex(sellerId);
    const postIndex = getPostIndex(sellerIndex, postId);

    sellers[sellerIndex].posts[postIndex].blocked = operation === 'block';
  }
};

export { createSeller, deleteSeller, publishPost, deletePost, togglePostBlock };
