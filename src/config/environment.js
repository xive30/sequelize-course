export default {
    port: parseInt(process.env.PORT) || 8080,
    nodeEnv: process.env.NODE_ENV ||'production',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || '351e2bbc762394107e7d22c5dddee27a3e2782b6031576456ab13f615cca6021',
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || '20a891b688a9b2c54fb53b0adfeec110321bd943eed040be45eec86b73cc79d5'
}