import { createCustomer, fetchFeed, subscriberSeller } from "./customers";
import { SellerOperations } from "../types/inquire";
import { createSeller, publishPost, deletePost, togglePostBlock } from ".";

const handleSellerFlows = (sellerFlow: SellerOperations) =>{
  switch (sellerFlow) {
    case 'newSeller': {
      createSeller('foo');
      break;
    }

    case 'newPost': {
      publishPost('10', {
        id: '111',
        name: 'bar',
        price: 123,
        blocked: false,
        publishDate: new Date().getTime(),
      });
      break;
    }

    case 'deletePost': {
      deletePost('10', '111');
      break;
    }

    case 'blockPost': {
      togglePostBlock('10', '111', 'block');
      break;
    }
  }
};

const handleCustomerFlows = (userFlow: any) =>{
  switch (userFlow.type) {
    case 'create': {
      createCustomer(userFlow.payload.filtrationType);
      break;
    }

    case 'subscribe': {
      const { customerId, sellerId } = userFlow.payload;

      subscriberSeller(customerId, sellerId);
      break;
    }

    case 'fetchFeed': {
      const { customerId } = userFlow.payload;

      fetchFeed(customerId);
      break;
    }
  }
};

export { handleSellerFlows, handleCustomerFlows };
