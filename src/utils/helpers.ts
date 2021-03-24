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

const handleUserFlows = (userFlow: any) =>{
  switch (userFlow.type) {
    case 'createCustomer': {
      break;
    }
  }
};

export { handleSellerFlows, handleUserFlows };
