import { SellerOperations, UserType } from './types/inquire';
import { createSeller, deletePost, publishPost, sellers, togglePostBlock } from './utils';

const handleSellerFlows = (sellerFlow: SellerOperations) =>{
  switch (sellerFlow) {
  case 'newSeller': {
    createSeller('foo');
    break;
  }

  case 'newPost': {
    publishPost(
      '10',
      {
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
  }

  case 'blockPost': {
    togglePostBlock('10', '111', 'block');
  }
  }
};

const init = () => {
  const userType: UserType = 'seller';

  if (userType) {
    handleSellerFlows('newSeller');
    console.log(sellers);

    handleSellerFlows('newPost');
    console.log(JSON.stringify(sellers));

    handleSellerFlows('blockPost');
    console.log(JSON.stringify(sellers));

    handleSellerFlows('deletePost');
    console.log(sellers);
  }
  // inquire about user type
  // ask seller flow from all 4
  // perform error handling or success operations
};

init();
