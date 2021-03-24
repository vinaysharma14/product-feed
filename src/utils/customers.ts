import { getSellerIndex, sellers } from "./seller";

export let customers:any = [];

const getCustomerIndex = (customerId: string) => customers.findIndex(({ id }:any) => id === customerId);

const createCustomer = (filtrationType: string) => {
  customers.push({
    filtrationType,
    subscriptions: [],
  });
};

const subscriberSeller = (customerId: string, sellerId: string) => {
  const customerIndex = getCustomerIndex(customerId);
  customers[customerIndex].subscriptions.push(sellerId);
};

const fetchFeed = (customerId: string) => {
  const feed:any = [];
  const customerIndex = getCustomerIndex(customerId);

  customers[customerIndex].subscriptions.forEach((sellerId:string) => {
    const sellerIndex = getSellerIndex(sellerId);
    feed.push(sellers[sellerIndex].posts);
  });

  // todo: filter
  console.log(feed);
};

export { createCustomer, subscriberSeller, fetchFeed };
