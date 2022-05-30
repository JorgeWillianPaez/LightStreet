const devEnv = {
    type: "postgresql",
    host: process.env.DB_URL,
    synchronize: false,
    logging: true,
    ssl: process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    entities: process.env.NODE_ENV === 'production'
        ? ['./dist/entities/**/*.js']
        : ['./src/entities/**/*.ts'],
    migrations: process.env.NODE_ENV === 'production'
        ? ['./dist/migrations/**/*.js']
        : ['./src/migrations/**/*.ts'],
    cli: {
        migrationsDir: './src/database/migrations'
    }
}

module.exports = devEnv;