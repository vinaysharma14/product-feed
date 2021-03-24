import { Post } from "./seller";

interface Customer {
  subscriptions: Post['name'][];
}

type Customers = Customer[];

export { Customers };
