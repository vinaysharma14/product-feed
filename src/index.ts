import { dummyPosts } from './data';
import { UserType } from './types/inquire';
import { customers, handleCustomerFlows, handleSellerFlows } from './utils';

let dateTestUserCount = 0;
const AB_TESTING_DATE_FILTRATION = 70;

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
    [...Array(10)].forEach((_, id) => {
      let filtrationType = 'date';

      if (customers.length) {
        // check percent of user having date as product filtration
        const dateFiltrationUserPercentage = (dateTestUserCount / customers.length) * 100;

        // if percent of user who have date filtration exceed the AB_TESTING_DATE_FILTRATION
        // then the new user would be having filtrationType as per seller rating
        if (dateFiltrationUserPercentage > AB_TESTING_DATE_FILTRATION){
          filtrationType = 'rating';
        }
      }

      // increment no of user who have filtration on basis of production date
      if (filtrationType === 'date') {
        dateTestUserCount++;
      }

      handleCustomerFlows({
        type: 'create',
        payload: { id, filtrationType },
      });

      handleCustomerFlows({
        type: 'subscribe',
        payload: { customerId: id, sellerId: 0 },
      });
    });
  }
};

init('seller');
init('customer');
