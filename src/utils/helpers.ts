import { createCustomer, fetchFeed, subscriberSeller } from "./customers";
import { createSeller, publishPost, deletePost, togglePostBlock } from ".";

const handleSellerFlows = (sellerFlow: any) =>{
  switch (sellerFlow.type) {
    case 'newSeller': {
      const { id, name, rating } = sellerFlow.payload;
      createSeller({ id, name, rating });
      break;
    }

    case 'newPost': {
      const { sellerId, post } = sellerFlow.payload;
      publishPost(sellerId, post);
      break;
    }

    case 'deletePost': {
      const { sellerId, postId } = sellerFlow.payload;
      deletePost(sellerId, postId);
      break;
    }

    case 'blockPost': {
      const { sellerId, postId, operation } = sellerFlow.payload;
      togglePostBlock(sellerId, postId, operation);
      break;
    }
  }
};

const handleCustomerFlows = (userFlow: any) =>{
  switch (userFlow.type) {
    case 'create': {
      const { id, filtrationType } = userFlow.payload;
      createCustomer(id, filtrationType);
      break;
    }

    case 'subscribe': {
      const { customerId, sellerIds } = userFlow.payload;

      subscriberSeller(customerId, sellerIds);
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
