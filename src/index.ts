import { dummyPosts } from './data';
import { UserType } from './types/inquire';
import { handleSellerFlows, sellers } from './utils';

const init = (userType: UserType) => {
  if (userType === 'seller') {
    handleSellerFlows({
      type: 'newSeller',
      payload: { id: 1, name: 'seller1', rating: 3 },
    });

    dummyPosts.forEach((post) => handleSellerFlows({
      type: 'newPost',
      payload: {
        post,
        sellerId: 1,
      },
    }));

    handleSellerFlows({
      type: 'blockPost',
      payload: {
        sellerId: 1,
        postId: 1,
        operation: 'block',
      },
    });

    handleSellerFlows({
      type: 'deletePost',
      payload: {
        sellerId: 1,
        postId: 1,
      },
    });
  } else {
    // todo:
    // 7:3 A/B testing
    // pluggable with more filtrations
  }
};

init('seller');
init('customer');
