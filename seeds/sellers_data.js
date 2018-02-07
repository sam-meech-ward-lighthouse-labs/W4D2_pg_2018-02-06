
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sellers').del()
    .then(function () {
      // Inserts seed entries
      return knex('sellers').insert([
        {usernam: 'costco', password: 'hot dogs'},
        {usernam: 'kirkland', password: 'hot dogs'}
      ]);
    });
};
