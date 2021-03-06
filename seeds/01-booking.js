
exports.seed = function(knex) {

  return knex('booking').truncate()
    .then(function () {

      return knex('booking').insert([
        {id: 1, 
          "address": "123 Ladybug Ln", 
          "owner_id": 1,
          "listing_id": 1,
          "user_id": 1,
          "state": "WA", 
          "description": "3 acre field of dandelions, daisies, and friendly ladybugs",
          "price": 75,
          "start_date": 2019-09-19,
          "end_date": 2019-10-19,
          "rented": true
        }
      ]);
    });
};
