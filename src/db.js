import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    host: '192.168.68.112',
    database: 'tiendatecnologica',
    password: 'postgres',
    port: 5433
})

console.log("database connected")