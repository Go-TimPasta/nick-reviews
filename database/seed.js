const faker = require('faker');
const db = require('./index.js');

const stylesArr = ['Digital Only', 'Canvas 8x10', 'Canvas 12x16', 'Canvas 18x24', 'Poster 8x10', 'Poster 12x16', 'Poster 18x24', 'Poster 30x40'];

const createUser = () => {
  const user = {};
  user.userName = faker.name.findName();
  user.userPhoto = faker.internet.avatar();
  user.category = Math.floor(Math.random() * (6));
  return user;
};

const createReviewForItem = () => {
  const reviewforItem = {};
  reviewforItem.userID = Math.ceil(Math.random() * (100));
  reviewforItem.review = faker.lorem.sentences();
  reviewforItem.reviewPicDog = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  reviewforItem.reviewPicCat = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;
  reviewforItem.reviewRating = Math.floor(Math.random() * (5 - 2 + 1) + 2);
  reviewforItem.reviewDate = faker.date.past();
  reviewforItem.style = `${stylesArr[Math.floor(Math.random() * Math.floor(stylesArr.length))]}`;
  return reviewforItem;
};

const createReviewForShop = () => {
  const reviewForShop = {};
  reviewForShop.userID = Math.floor(Math.random() * (100));
  reviewForShop.review = faker.lorem.sentences();
  reviewForShop.reviewPicDog = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  reviewForShop.reviewPicCat =`http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  reviewForShop.reviewRating = Math.floor(Math.random() * (5 - 2 + 1) + 2);
  reviewForShop.reviewDate = faker.date.past();
  reviewForShop.purchasedItemDescription = faker.lorem.sentence();
  reviewForShop.purchasedItemPicDog = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  reviewForShop.purchasedItemPicCat = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;
  return reviewForShop;
};

const createUsers = () => {
  const usersArr = [];
  for (let i = 0; i < 1000; i += 1) {
    usersArr.push(createUser());
  }
  return usersArr;
};

const createReviewsForItem = () => {
  const reviewsForItemArr = [];
  for (let i = 0; i < 400; i += 1) {
    reviewsForItemArr.push(createReviewForItem());
  }
  return reviewsForItemArr;
};

const createReviewsForShop = () => {
  const reviewsForShopArr = [];
  for (let i = 0; i < 800; i += 1) {
    reviewsForShopArr.push(createReviewForShop());
  }
  return reviewsForShopArr;
};

function seedMe() {
  const reviewsForItemArrDogs = createReviewsForItem();
  const reviewsForItemArrCats = createReviewsForItem();
  const usersArr = createUsers();
  const reviewsForShopArrDogs = createReviewsForShop();
  const reviewsForShopArrCats = createReviewsForShop();
  usersArr.forEach((user) => {
    db.query(`INSERT INTO users (userName, userPhoto, category) VALUES ("${user.userName}", "${user.userPhoto}", ${user.category})`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });
  reviewsForItemArrDogs.forEach((review) => {
    db.query(`INSERT INTO reviewsForItemDogs(userID, review, reviewPic, reviewRating, reviewDate, style) VALUES ( ${review.userID}, "${review.review}", "${review.reviewPicDog}", "${review.reviewRating}", "${review.reviewDate}", "${review.style}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });
  reviewsForItemArrCats.forEach((review) => {
    db.query(`INSERT INTO reviewsForItemCats(userID, review, reviewPic, reviewRating, reviewDate, style) VALUES ( ${review.userID}, "${review.review}", "${review.reviewPicCat}", "${review.reviewRating}", "${review.reviewDate}", "${review.style}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });
  reviewsForShopArrDogs.forEach((reviewShop) => {
    db.query(`INSERT INTO reviewsForShopDogs(userID, review, reviewPic, reviewRating, reviewDate, purchasedItemDescription, purchasedItemPic) VALUES ( ${reviewShop.userID}, "${reviewShop.review}", "${reviewShop.reviewPicDog}", "${reviewShop.reviewRating}", "${reviewShop.reviewDate}", "${reviewShop.purchasedItemDescription}", "${reviewShop.purchasedItemPicDog}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });
  reviewsForShopArrCats.forEach((reviewShop) => {
    db.query(`INSERT INTO reviewsForShopCats(userID, review, reviewPic, reviewRating, reviewDate, purchasedItemDescription, purchasedItemPic) VALUES ( ${reviewShop.userID}, "${reviewShop.review}", "${reviewShop.reviewPicCat}", "${reviewShop.reviewRating}", "${reviewShop.reviewDate}", "${reviewShop.purchasedItemDescription}", "${reviewShop.purchasedItemPicCat}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });

  db.end();
}

seedMe();
