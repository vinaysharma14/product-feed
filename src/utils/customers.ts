import { getSellerIndex, sellers } from "./seller";

export let customers:any = [];

const getCustomerIndex = (customerId: string) => customers.findIndex(({ id }:any) => id === customerId);

const createCustomer = (id:string, filtrationType: string) => {
  customers.push({
    id,
    filtrationType,
    subscriptions: [],
  });
};

const subscriberSeller = (customerId: string, sellerId: string) => {
  const customerIndex = getCustomerIndex(customerId);
  const { subscriptions } = customers[customerIndex];

  customers[customerIndex].subscriptions = [...subscriptions, ...sellerId];
};

const fetchFeed = (customerId: string) => {
  let feed:any = [];

  const customerIndex = getCustomerIndex(customerId);
  const { filtrationType, subscriptions } = customers[customerIndex];

  subscriptions.forEach((sellerId:string) => {
    const sellerIndex = getSellerIndex(sellerId);
    const { rating } = sellers[sellerIndex];

    feed = [
      ...feed,
      ...sellers[sellerIndex].posts
        .map((post) => ({ ...post, rating })) // fetch all products listed by the subscribed seller
        .filter(({ blocked }) => !blocked), // filter out any blocked product
    ];
  });

  // sort the feed based on filtration type which could be either date or ranking
  const sortedFeed = feed.sort((a:any, b:any):any => b[filtrationType] - a[filtrationType]);

  console.log(sortedFeed);
};

export { createCustomer, subscriberSeller, fetchFeed };
