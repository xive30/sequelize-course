import TestsHelpers from '../../tests-helpers';
import request from 'supertest'

describe('register', () => {

    let app;

    beforeAll(async () => {
        await TestsHelpers.startDb();
        app = TestsHelpers.getApp();
    });

    afterAll(async () => {
        await TestsHelpers.stopDb();
    });

    beforeEach(async () => {
        await TestsHelpers.syncDb();
    });

    it('should register a new user successfully', async()=>{
        const roles = ['admin', 'customer'];
        const response = await request(app)
        .post('/v1/register')
        .send({
            email:'test@example.com',
            password:"Test123#",
            username:'test',
            lastName:'John',
            firstName:"Doe",
            roles,
        })
        .expect(200);
    });
});