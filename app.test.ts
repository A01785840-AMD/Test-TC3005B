import request from "supertest";
import app from "./app.ts";


describe("Test app", () => {
    test('GET / should return hello world', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello world!");
    })
})