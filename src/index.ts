import { UserType } from './types/inquire';
import { handleSellerFlows } from './utils';

const init = (userType: UserType) => {
  if (userType === 'seller') {
    handleSellerFlows('newSeller');
    handleSellerFlows('newPost');
    handleSellerFlows('blockPost');
    handleSellerFlows('deletePost');
  } else {
    // todo:
    // 7:3 A/B testing
    // pluggable with more filtrations
  }
};

init('seller');
init('customer');
