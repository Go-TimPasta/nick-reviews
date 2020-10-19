-- Schema for PostgreSQL

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  productOrShopId INT NOT NULL,
  userName VARCHAR(50) NOT NULL,
  userPhoto VARCHAR(255) NOT NULL,
  reviewDate TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_DATE,
  style VARCHAR(50),
  review TEXT NOT NULL,
  reviewPic VARCHAR(255) NOT NULL,
  reviewRating INT NOT NULL,
  purchasedItemDescription VARCHAR(255)
);

-- COPY reviews
--   FROM 'reviewsData1.csv'
--   CSV HEADER;