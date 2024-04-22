const {client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'streakosdb',
    user: '',
    password: 'postgresql',
});

client.connect((err) => {
    if(err){
        console.error("Error connecting")
    }

    console.log("Connected to database");
});

client.query('select * from users', (err, results) => {
    if(err){
        console.error('Error querying the database:', err);
        return;
    }
    console.log(results.rows);
})