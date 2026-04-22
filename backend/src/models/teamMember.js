module.exports = (sequelize, DataTypes) => {
	const TeamMember = sequelize.define('TeamMember', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		teamId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'teams',
				key: 'id',
			},
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
			},
		},
		joinedAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		status: {
			type: DataTypes.STRING(20),
			defaultValue: 'active',
			validate: {
				isIn: [['active', 'inactive']],
			},
		},
	}, {
		tableName: 'team_members',
		timestamps: true,
		underscored: true,
		indexes: [
			{
				unique: true,
				fields: ['teamId', 'userId'],
			},
		],
	});

	return TeamMember;
};
