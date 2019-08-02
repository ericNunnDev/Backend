const faker = require('faker');

exports.seed = function(knex) {
  return knex('candidates').del()
    .then(function () {
      return knex('candidates').insert([
        {
          candidate_name: faker.name.findName(),
          political_party: faker.random.arrayElement(['Democrat', 'Republican']),
          email: faker.internet.email(),
          phone_number: faker.phone.phoneNumber(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode()
        },
        {
          candidate_name: faker.name.findName(),
          political_party: faker.random.arrayElement(['Democrat', 'Republican']),
          email: faker.internet.email(),
          phone_number: faker.phone.phoneNumber(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode()
        },
        {
          candidate_name: faker.name.findName(),
          political_party: faker.random.arrayElement(['Democrat', 'Republican']),
          email: faker.internet.email(),
          phone_number: faker.phone.phoneNumber(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode()
        },
        {
          candidate_name: faker.name.findName(),
          political_party: faker.random.arrayElement(['Democrat', 'Republican']),
          email: faker.internet.email(),
          phone_number: faker.phone.phoneNumber(),  
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode()
        },
        {
          candidate_name: faker.name.findName(),
          political_party: faker.random.arrayElement(['Democrat', 'Republican']),
          email: faker.internet.email(),
          phone_number: faker.phone.phoneNumber(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode()
        },
        {
          candidate_name: faker.name.findName(),
          political_party: faker.random.arrayElement(['Democrat', 'Republican']),
          email: faker.internet.email(),
          phone_number: faker.phone.phoneNumber(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode()
        },
        {
          candidate_name: faker.name.findName(),
          political_party: faker.random.arrayElement(['Democrat', 'Republican']),
          email: faker.internet.email(),
          phone_number: faker.phone.phoneNumber(),
          state: faker.address.stateAbbr(),
          zip: faker.address.zipCode()
        }
      ]);
    });
};
