db.auth('e2e-website-mails_admin', '2b0YlZxL79D');

db = db.getSiblingDB('e2e-website-mails');

db.createUser({
  user: 'e2e-website-mails_db_owner',
  pwd: 'i5u3h1KHb61',
  roles: [
    {
      role: 'dbOwner',
      db: 'e2e-website-mails',
    },
  ],
});

db.createCollection('users');
