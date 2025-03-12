## About Project

## How to run

1. Install node
2. Refactor your env file set local server
3. run command npm start then npm run dev

## Technologies

<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="Express" alt="Express" width="40" height="40"/><img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg" title="MySql" alt="MySql" width="40" height="40"/> <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>

## Libraries

-   sequelize
-   helmet
-   dayjs
-   nodemailer
-   jwt-decode
-   jsonwebtoken
-   html-pdf
-   bcrypt

### Request methods

The request method is the way we distinguish what kind of action our endpoint is being "asked" to perform. For example, `GET` pretty much gives itself. But we also have a few other methods that we use quite often.

| Method   | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| `GET`    | Used to retrieve a single item or a collection of items.                 |
| `POST`   | Used when creating new items e.g. a new user, post, comment etc.         |
| `PATCH`  | Used to update one or more fields on an item e.g. update e-mail of user. |
| `PUT`    | Used to replace a whole item (all fields) with new data.                 |
| `DELETE` | Used to delete an item.                                                  |

### APIS

All apis with descriptions and methods:

| Method | URL               | Description                                                                |
| ------ | ----------------- | -------------------------------------------------------------------------- |
| `GET`  | `/api/client/`    | Recieve all clients                                                        |
| `POST` | `/api/client/`    | Can create body must be : {name, phone, email, email_invoice, address,bin} |
| `GET`  | `/api/client/:id` | Recieve clients info by id                                                 |

## Headers

Below you can see all the headers that we use

| Header key        | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Accept`          | This header is **required by all endpoints**. It’s used to identify the request as our own and for versioning our endpoints. **Default value**: `application/vnd.nodes.v1+json`. |
| `Accept-Language` | The [ISO 639](http://www.loc.gov/standards/iso639-2/php/code_list.php) code of language translations should be returned in.                                                      |
| `Authorization`   | The authorized user’s token. This is used to gain access to protected endpoint.                                                                                                  |

## HTTP Response Status Codes

One of the most important things in an API is how it returns response codes. Each response code means a different thing and consumers of your API rely heavily on these codes.

| Code  | Title                   | Description                                                                                                                                                     |
| ----- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `200` | `OK`                    | When a request was successfully processed (e.g. when using `GET`, `PATCH`, `PUT` or `DELETE`).                                                                  |
| `201` | `Created`               | Every time a record has been added to the database (e.g. when creating a new user or post).                                                                     |
| `304` | `Not modified`          | When returning a cached response.                                                                                                                               |
| `400` | `Bad request`           | When the request could not be understood (e.g. invalid syntax).                                                                                                 |
| `401` | `Unauthorized`          | When authentication failed.                                                                                                                                     |
| `403` | `Forbidden`             | When an authenticated user is trying to perform an action, which he/she does not have permission to.                                                            |
| `404` | `Not found`             | When URL or entity is not found.                                                                                                                                |
| `440` | `No accept header`      | When the required "Accept" header is missing from the request.                                                                                                  |
| `422` | `Unprocessable entity`  | Whenever there is something wrong with the request (e.g. missing parameters, validation errors) even though the syntax is correct (ie. `400` is not warranted). |
| `500` | `Internal server error` | When an internal error has happened (e.g. when trying to add/update records in the database fails).                                                             |
| `502` | `Bad Gateway`           | When a necessary third party service is down.                                                                                                                   |

## Response

Generally we have a few rules the response has to follow:

-   Root should always be returned as an object.
-   Keys should always be returned as camelCase.
-   When we don’t have any data, we need to return in the following way:
    -   Collection: Return empty array.
    -   Empty key: Return null or unset the key.
-   Consistency of key types. e.g. always return IDs as an integer in all endpoints.
-   Date/timestamps should always be returned with a time zone.
-   Content (being a single object or a collection) should be returned in a key (e.g. `data`).
-   Pagination data should be returned in a `meta` key.
-   Endpoints should always return a JSON payload.
    -   When an endpoint doesn't have meaningful data to return (e.g. when deleting something), use a `status` key to communicate the status of the endpoint.
