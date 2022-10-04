import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
import environment from '../config/environment';

export default (sequelize) => {
    class User extends Model {
        static associate(models) {
            User.RefreshToken = User.hasOne(models.RefreshToken);
            User.Roles = User.hasMany(models.Role)
        }

        static async hashPassword(password) {
            return bcrypt.hash(password, environment.saltRounds)
        }

        static async CreateNewUser({
            email,
            password,
            roles,
            username,
            firstName,
            lastName,
            refreshToken,
        }) {
            return sequelize.transaction(() => {
                let rolesToSave = [];

                if (roles && Array.isArray(roles)) {
                    rolesToSave = roles.map((role) => ({ role }));
                }

                return User.create(
                    {
                        email,
                        password,
                        username,
                        firstName,
                        lastName,
                        RefreshToken: { token: refreshToken },
                        Roles: rolesToSave,
                    },
                    { include: [User.RefreshToken, User.Roles] }
                );
            });
        }
    }

    User.init(
        {
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: 'Not a valid email address',
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(50),
                unique: true,
                validate: {
                    len: {
                        args: [2, 50],
                        msg: 'Username must contain between 2 and 50 characters.'
                    }
                }
            },
            firstName: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [2, 50],
                        msg: 'firstname must contain between 2 and 50 characters.'
                    }
                }
            },
            lastName: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [2, 50],
                        msg: 'lastname must contain between 2 and 50 characters.'
                    }
                }
            },
        },
        {
            sequelize,
            modelName: 'User',
            defaultScope: {
                attributes: { exclude: ['password'] }
            },
            scopes: {
                withPassword: {
                    attributes: { include: [password] },
                }
            }
        }
    );

    User.prototype.comparePasswords = async function (password) {
        return bcrypt.compare(password, this.password);
    }

    User.beforeSave(async (user, options) => {
        const hashpassword = await User.hashPassword(user.password);
        user.password = hashpassword;
    });

    return User;
};