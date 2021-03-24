export const dummyPosts = [{
  id: 0,
  name: 'p0',
  price: 10,
  blocked: false,
  publishDate: new Date().getTime(),
}, {
  id: 1,
  name: 'p1',
  price: 20,
  blocked: false,
  // 1 min added
  publishDate: new Date().getTime() + (1 * 60 * 1000),
}, {
  id: 2,
  name: 'p2',
  price: 30,
  blocked: false,
  // 2 min added
  publishDate: new Date().getTime() + (2 * 60 * 1000),
}, {
  id: 3,
  name: 'p3',
  price: 40,
  blocked: false,
  // 3 min added
  publishDate: new Date().getTime() + (3 * 60 * 1000),
}, {
  id: 4,
  name: 'p4',
  price: 40,
  blocked: false,
  // 4 min added
  publishDate: new Date().getTime() + (4 * 60 * 1000),
}, {
  id: 5,
  name: 'p5',
  price: 60,
  blocked: false,
  // 5 min added
  publishDate: new Date().getTime() + (5 * 60 * 1000),
}, {
  id: 6,
  name: 'p6',
  price: 70,
  blocked: false,
  // 6 min added
  publishDate: new Date().getTime() + (6 * 60 * 1000),
}];

export const dummySeller = [{
  id: 0,
  rating: 2,
  name: 's0',
  posts: [dummyPosts[0], dummyPosts[1], dummyPosts[2]],
}, {
  id: 1,
  rating: 3,
  name: 's1',
  posts: [dummyPosts[3], dummyPosts[4], dummyPosts[5]],
}];
