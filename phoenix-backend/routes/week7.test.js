import request from "supertest";
import app from "../app.js";
import { pool } from "../db/index.js";
import "expect-more-jest";

//Closing async connection to heroku database after tests end
afterAll((done) => {
  pool.end();
  done();
});

describe("GET response: receive week 7 data", () => {
  test("Check for HTTP status code is 200", async () => {
    //Arrange
    const expected = 200;

    //Act
    const response = await request(app).get("/week7");
    const actual = response.statusCode;

    //Assert
    expect(actual).toBe(expected);
  });
  test("Check that response body has structure { message: Success, payload: array }", async () => {
    //Arrange
    const expected = {
      message: "Success",
      payload: expect.any(Array),
    };

    //Act
    const response = await request(app).get("/week7");
    const actual = response.body;

    //Assert
    expect(actual).toStrictEqual(expected);
  });
  test("Check that payload is an array of objects containing data or null", async () => {
    //Arrange
    const expected = {
      message: "Success",
      payload: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          week_number: expect.any(Number),
          catagory_id: expect.toBeNullableOf(expect.any(Number)),
          contact_id: expect.toBeNullableOf(expect.any(Number)),
          catagory_name: expect.toBeNullableOf(expect.any(String)),
          title: expect.toBeNullableOf(expect.any(String)),
          content: expect.toBeNullableOf(expect.any(String)),
          url: expect.toBeNullableOf(expect.any(String)),
          img: expect.toBeNullableOf(expect.any(String)),
          name: expect.toBeNullableOf(expect.any(String)),
          heading: expect.toBeNullableOf(expect.any(String)),
          twitter: expect.toBeNullableOf(expect.any(String)),
          linkedin: expect.toBeNullableOf(expect.any(String)),
          description: expect.toBeNullableOf(expect.any(String)),
        }),
      ]),
    };

    //Act
    const response = await request(app).get("/week7");
    const actual = response.body;

    //Assert
    expect(actual).toEqual(expected);
  });
});
