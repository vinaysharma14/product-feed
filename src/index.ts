import { dummySeller } from './data';
import { UserType } from './types/inquire';
import { customers, handleCustomerFlows, handleSellerFlows } from './utils';

let dateTestUserCount = 0;

// this percent of user would use date filtration
const AB_TESTING_DATE_FILTRATION = 70;

const init = (userType: UserType) => {
  if (userType === 'seller') {
    dummySeller.forEach(({ id, name, rating, posts }) => {
      handleSellerFlows({
        type: 'newSeller',
        payload: { id, name, rating },
      });

      posts.forEach((post) => handleSellerFlows({
        type: 'newPost',
        payload: {
          post,
          sellerId: id,
        },
      }));

      handleSellerFlows({
        type: 'blockPost',
        payload: {
          sellerId: id,
          operation: 'block',
          postId: posts[0].id,
        },
      });

      // * commented for sake of testing filtration of subscriptions
      // handleSellerFlows({
      //   type: 'deletePost',
      //   payload: {
      //     sellerId: 1,
      //     postId: 1,
      //   },
      // });
    });
  } else {
    [...Array(10)].forEach((_, id) => {
      let filtrationType = 'publishDate';

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
      if (filtrationType === 'publishDate') {
        dateTestUserCount++;
      }

      handleCustomerFlows({
        type: 'create',
        payload: { id, filtrationType },
      });

      handleCustomerFlows({
        type: 'subscribe',
        payload: { customerId: id, sellerIds: [0, 1] },
      });
    });

    // date
    handleCustomerFlows({
      type: 'fetchFeed',
      payload: { customerId: 0 },
    });

    // rating
    handleCustomerFlows({
      type: 'fetchFeed',
      payload: { customerId: 1 },
    });
  }
};

init('seller');
init('customer');
