import pg from 'pg';

const pool = new pg.Pool({
    user: 'postgres',
    host: '192.168.100.128',
    database: 'tiendatecnologica',
    password: 'postgres',
    port: 5433
})

console.log("database connected")