const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

faker.locale = 'en_US';

/*
DATA NEEDED:
id
product or shop id
Full name
avatar
Review date
Product style
Review text
Product photo
Product rating: 1–5
Item purchased
*/

const writeReviews = fs.createWriteStream('database/reviewsDataTest.csv');
writeReviews.write('id,productOrShopId,userName,userPhoto,reviewDate,style,review,reviewPic,reviewRating,purchasedItemDescription\n', 'utf8');

const stylesArr = ['Digital Only', 'Canvas 8x10', 'Canvas 12x16', 'Canvas 18x24', 'Poster 8x10', 'Poster 12x16', 'Poster 18x24', 'Poster 30x40'];

function writeReviewData(writer, encoding, callback) {
  let i = 10;
  let productOrShopId = 0;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      productOrShopId += 1;
      const howManyReviews = faker.random.number({ min: 4, max: 12 });
      for (let j = 1; j < howManyReviews; j += 1) {
        id += 1;
        const userName = `${faker.name.firstName()} ${faker.name.lastName()}`;
        const userPhoto = faker.image.avatar();
        const fakerDate = faker.date.between('2020-07-15', '2020-10-15');
        const reviewDate = moment(fakerDate).format('YYYY-MM-DD HH:mm:ss Z');
        const style = faker.random.arrayElement(stylesArr);
        const review = faker.lorem.sentences();
        const photoId = faker.random.number({ min: 1, max: 500 });
        const reviewPic = `https://getsy-reviews.s3-us-west-1.amazonaws.com/getsy_${photoId}.jpg`;
        const reviewRating = faker.random.number({ min: 1, max: 5 });
        const purchasedItemDescription = faker.lorem.sentence();

        const data = `${id},${productOrShopId},${userName},${userPhoto},${reviewDate},${style},${review},${reviewPic},${reviewRating},${purchasedItemDescription}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeReviewData(writeReviews, 'utf-8', () => {
  writeReviews.end();
});
