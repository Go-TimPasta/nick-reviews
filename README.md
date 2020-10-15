# Etsy-Reviews

## Related Projects

  - https://github.com/Go-TimPasta/tim-related
  - https://github.com/Go-TimPasta/SellerDescription

## Table of Contents

1. [CRUD Operations](#CRUD-Operations)
2. [Data](#Data)
3. [Setup](#Setup)

## CRUD Operations

| Endpoint          | Type   | Operation                          |
|-------------------|--------|------------------------------------|
| `/`               | GET    | Get all reviews for shop by id     |
| `/`               | GET    | Get all reviews for product by id  |
| `/`               | POST   | Post a review                      |
| `/`               | PUT    | Update a review                    |
| `/`               | DELETE | Delete a review                    |

## Data

### Schema
- id (INTEGER UNIQUE)
- productOrShopId (INTEGER)
- userName (STRING)
- userPhoto (STRING)
- reviewDate (STRING)
- style (STRING)
- review (STRING)
- photoId (STRING)
- reviewPic (STRING)
- reviewRating (INTEGER)
- purchasedItemDescription (STRING)

## Setup