
// Para homologação
/* module.exports = {
	client: 'postgresql',
	connection: {
		database: 'controleLavanderia',
		user: 'postgres',
		password: '123456'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
 */


module.exports = {
	client: 'postgresql',
	connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '123456',
        database: process.env.DB_NAME || 'controleLavanderia',
    },
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};