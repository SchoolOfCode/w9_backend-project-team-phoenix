![Logo](https://russellventura.co.uk/wp-content/uploads/2022/06/TeamPhoenix.png)
TEAM PHOENIX

# Backend Brief

Create a backend for an app that will improve the lives of boot campers.



## What problem does our app solve?

We asked ourselves the following 3 questions:

- What can help them with the vast amount of learning there is to do as a new developer?
- What do they need?
- What problem might they have that your application could solve for them?

Create a minimum viable product (MVP) backend showcasing an innovative full stack application which meets the user need you’ve identified

# Features

Our project application included the following:

- A REST API to be available for a front end
- A PostgreSQL database with multiple tables
- Built and managed in an agile way
- Utilised testing for ensuring robust code


# Usage
 
## Example Routes


| Method | Path             | Additional Info | Result                                         | Response                                  |
| ------ | ---------------- | --------------- | ---------------------------------------------- | ----------------------------------------- |
| GET    | /week1          | The week number is changable, depends on what week you want to GET   | all resources for week 1                                      | { success: Boolean, payload: Week 1 Array } |
| POST    | /contact          | { body } only can be accessed by the backend admin  | Create new contact                                     | { success: Boolean, payload: new contact } |
| POST    | /category          | { body } only can be accessed by the backend admin   | Create new category                                     | { success: Boolean, payload: new category } |

## Example GET Response

```javascript
{
  "message": "Success",
  "payload": [
    {
      id: 1,
      week_number: 1,
      catagory_id: 1,
      contact_id: 2,
      catagory_name: "Useful links",
      title: "The shapes of css",
      content: "CSS is capable of making all sorts of shapes. Squares and rectangles are easy, as they are the natural shapes of the web. Add a width and height and you have the exact size rectangle you need. Add border-radius and you can round that shape, and enough of it you can turn those rectangles into circles and ovals.",
      url: "https://css-tricks.com/the-shapes-of-css/",
      img: null,
      name: "Chris Meah",
      heading: "Contact Information",
      twitter: "https://twitter.com/TheMeahCat",
      linkedin: "https://www.linkedin.com/in/chrismeah/",
      description: "SOC CEO"
    }]
}
```
## Payload Content

|Name | Description            | Type|
| ------ | ---------------- | --------------- | 
| id   | Unique id for each resource          | Integer   | 
| week_number    | Week number          | Integer  | 
| catagory_id    | id for each category resource        | Integer   | 
| contact_id    | id for each contact resource           | Integer   | 
| catagory_name    | Resource topic          | String   | 
| title    |   The resource title        | String   | 
| content    |  Description of the resource       | String   | 
| url    |  Link to the resource         | String   | 
| img    |  Link to resource image        | String   | 
| name   |  Name of the contact        | String   | 
| heading    | Section title          | String   | 
| twitter    |  Url to the contact's twitter         | String   |
| linkedin    |   Url to the contact's LinkedIn        | String   |
| description    |  Title of the Contact         | String   |

# Running Tests

To run tests, run the following command

```bash
  npm test
```
The following test makes sure that all get responses send a 200 status code, makes sure the payload is an array, and the array contains objects with specific format.

# Libraries

 - [express-generator-esmoduless](https://www.npmjs.com/package/express-generator-esmodules)
 - [dotenv](https://www.npmjs.com/package/dotenv)
 - [cors](https://www.npmjs.com/package/cors)
 - [node-postgres](https://www.npmjs.com/package/pg)
 - [nodemon](https://www.npmjs.com/package/nodemon)
 - [jest](https://www.npmjs.com/package/jest)
 - [supertest](https://www.npmjs.com/package/supertest)
 - [Heroku](https://www.heroku.com/)


# Roadmap

- Develop React admin page for all requests (PUT/PATCH/DELETE)
- Add authentication for admins

# Authors

- [Abdullahi Mohamoud](https://github.com/Abdu11ahi)
- [Khulvinder Mall](https://github.com/KhullyMall)
- [Min-Chih Yang](https://github.com/Min-Chih)

# Here's a link to our frontend repo

- [@Frontend Repo](https://github.com/SchoolOfCode/w9_frontend-project-team-phoenix)


