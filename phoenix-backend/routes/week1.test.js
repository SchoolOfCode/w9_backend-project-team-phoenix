import request from "supertest";
import app from "../app.js";
import { pool } from "../db/index.js";

afterAll((done) => {
  pool.end();
  done();
});

describe("GET response: receive week 1 data", () => {
  test("Check for HTTP status code", async () => {
    //Arrange
    const expected = 200;

    //Act
    const response = await request(app).get("/week1");
    const actual = response.statusCode;

    //Assert
    expect(actual).toBe(expected);
  });
  test("Check that body has structure { message: Success, payload: array }", async () => {
    //Arrange
    const expected = {
      message: "Success",
      payload: expect.any(Array),
    };

    //Act
    const response = await request(app).get("/week1");
    const actual = response.body;

    //Assert
    expect(actual).toStrictEqual(expected);
  });
  test("Check that payload contains objects with specific structure", async () => {
    const response = await request(app).get("/week1");
    const actual = response.body;
    const expected = {
      message: "Success",
      payload: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          week_number: expect.any(Number),
          catagory_id: expect.any(Number),
          contact_id: expect.any(Number),
          //   catagory_name: expect.any(String || null),
          //   title: expect.any(String || null),
          //   content: expect.any(String || null),
          //   url: expect.any(String || null),
          //   img: expect.any(String || null),
          //   name: expect.any(String || null),
          //   heading: expect.any(String || null),
          //   twitter: expect.any(String || null),
          //   linkedin: expect.any(String || null),
          //   description: expect.any(String || null),
        }),
      ]),
    };
    expect(actual).toStrictEqual(expected);
  });
});
