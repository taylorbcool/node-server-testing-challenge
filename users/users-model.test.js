const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('users model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    
    describe('insert()', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it('adds the new user to the db', async function() {
            // call insert passing a user
            await Users.insert({ name: 'username6', password: 'password', type: 'admin' });
            await Users.insert({ name: 'username7', password: 'password', type: 'admin' });

            // open the db and see that the user is there
            const users = await db('users');

            expect(users).toHaveLength(2);
        })
        
        it('adds the new user to the db', async function() {
            // call insert passing a user
            await Users.insert({ name: 'username6', password: 'password6', type: 'admin' });
            await Users.insert({ name: 'username7', password: 'password7', type: 'admin' });

            // open the db and see that the user is there
            const users = await db('users');

            expect(users).toHaveLength(2);
        })


    })    
})

