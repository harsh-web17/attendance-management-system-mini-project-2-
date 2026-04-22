const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const compression = require('compression');

dotenv.config();

const app = express();

// CORS configuration for Render deployment
const corsOptions = {
	origin: function (origin, callback) {
		// Allow requests with no origin (like mobile apps or curl requests)
		// In production, replace with your Render frontend URL
		const allowedOrigins = [
			'http://localhost:5173',
			'http://localhost:3000',
			// Add your Render frontend URL here, e.g.:
			// 'https://your-frontend.onrender.com'
		];
		if (!origin || allowedOrigins.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true,
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));

// Routes
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const attendanceRoutes = require('./routes/attendance.routes');

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/attendance', attendanceRoutes);

app.get('/health', (req, res) => {
	res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 4000;
const { initDatabase } = require('./config/db');
initDatabase()
	.then(() => {
		app.listen(PORT, () => {
			// eslint-disable-next-line no-console
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch((err) => {
		// eslint-disable-next-line no-console
		console.error('Failed to initialize database', err);
		process.exit(1);
	});

module.exports = app;


