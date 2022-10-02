import jwt from 'jsonWebToken';
import JWTUtils from '../../src/utils/jwt-utils';

describe('jwt utils', () => {
    it('should return an access token', () => {
        const payload = {email: 'test@example.com'};
        expect(JWTUtils.generateAccessToken(payload)).toEqual(expect.any(string));
    })

    it('should return a refresh token', () => {
        const payload = {email: 'test@example.com'};
        expect(JWTUtils.generateRefreshToken(payload)).toEqual(expect.any(string));
    })

    it('should verify that the access token is valid', () => {
        const payload = {email: 'test@example.com'};
        const jwt = JWTUtils.generateAccessToken(payload);
        expect(JWTUtils.verifyAccessToken(jwt)).toEqual(expect.objectContaining(payload)
        );
    });

    it('should verify that the refresh token is valid', () => {
        const payload = {email: 'test@example.com'};
        const jwt = JWTUtils.generateRefreshToken(payload);
        expect(JWTUtils.verifyRefreshToken(jwt)).toEqual(expect.objectContaining(payload)
        );
    });
});