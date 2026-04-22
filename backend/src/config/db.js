const { sequelize } = require('../models');
const { seedDatabase } = require('./seeder');

async function initDatabase() {
	try {
		// Test connection
		await sequelize.authenticate();
		console.log('✅ Database connection established successfully.');

		// Tables already exist, skip sync
		// await sequelize.sync({ alter: true });
		console.log('✅ Database tables ready.');

		// Skip seeding - data already exists
		// await seedDatabase();

		console.log('🚀 Database initialization completed successfully!');
	} catch (error) {
		console.error('❌ Database initialization failed:', error);
		throw error;
	}
}

module.exports = { initDatabase };


