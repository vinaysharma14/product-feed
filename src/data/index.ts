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
  // 2 min added
  publishDate: new Date().getTime() + (2 * 60 * 1000),
}, {
  id: 2,
  name: 'p2',
  price: 30,
  blocked: false,
  // 3 min added
  publishDate: new Date().getTime() + (3 * 60 * 1000),
}, {
  id: 3,
  name: 'p3',
  price: 40,
  blocked: false,
  // 4 min added
  publishDate: new Date().getTime() + (4 * 60 * 1000),
}];
