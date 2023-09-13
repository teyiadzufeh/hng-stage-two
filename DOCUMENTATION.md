# Stage Two API Documentation

## Introduction

Welcome to TeyiAdzufeh's HNG Stage 2 API documentation. This API allows you to interact with our platform to perform various actions. In this document, you will find information about the four endpoints which perform different CRUD operations.

## Endpoints

### Create Person

- **Description**: This endpoint is used to create a new person.

#### Request

- **Method**: POST
- **URL**: [{{Host}}/api/](https://hng-stage-two-n49x.onrender.com/api)
- **Headers**:
  - `Content-Type: application/json`

##### Request Body

The request body should contain a JSON object with the following field:

- `name` (string, required): The user's name.

#### Response

##### Success Response

- **Status Code**: 201 Created
- **Response Body**: The response contains a JSON object with a success message and user data.

```json
{
    "message": "Person created successfully",
    "data": {
        "name": "Mark E",
        "_id": "64ff2c26e8c0b498646cfd60",
        "__v": 0,
        "createdAt": "2023-09-11T15:03:02.902Z",
        "updatedAt": "2023-09-11T15:03:02.902Z"
    }
}
```

##### Possible Failed Response

- **Status Code**: 404 Not Found
- **Response Body**: The response contains a message saying the user wasn't found.

### Fetch Person

- **Description**: This endpoint is used to retrieve user information for the user with the specified ID.

#### Request

- **Method**: GET
- **URL**: [{{Host}}/api/{{userId}}](https://hng-stage-two-n49x.onrender.com/api/64ff2c26e8c0b498646cfd60)

#### Response

##### Success Response

- **Status Code**: 200 OK
- **Response Body**: The response contains a JSON object with user information.

```json
{
    "message": "Person fetched successfully",
    "data": {
        "_id": "64ff2c26e8c0b498646cfd60",
        "name": "Mark E",
        "__v": 0,
        "createdAt": "2023-09-11T15:03:02.902Z",
        "updatedAt": "2023-09-11T15:03:02.902Z"
    }
}
```

##### Possible Failed Response

- **Status Code**: 404 Not Found
- **Response Body**: The response contains a message saying the user wasn't found.

### Update Person

- **Description**: This endpoint is used to update user information for the user with the specified ID.

#### Request

- **Method**: PUT
- **URL**: [{{Host}}/api/{{userId}}](https://hng-stage-two-n49x.onrender.com/api/64ff2c26e8c0b498646cfd60)
- **Headers**:
  - `Content-Type: application/json`

##### Request Body

The request body should contain a JSON object with the updated user information.

```json
{
    "name": "Man Esie"
}
```

#### Response

##### Success Response

- **Status Code**: 200 OK
- **Response Body**: The response contains a JSON object with the updated user information.

```json
{
    "message": "Person updated successfully",
    "data": {
        "_id": "64ff2c26e8c0b498646cfd60",
        "name": "Man Esie",
        "__v": 0,
        "createdAt": "2023-09-11T15:03:02.902Z",
        "updatedAt": "2023-09-11T15:10:24.236Z"
    }
}
```

##### Possible Failed Response

- **Status Code**: 404 Not Found
- **Response Body**: The response contains a message saying the user wasn't found.

### Delete Person

- **Description**: This endpoint is used to delete user information for the user with the specified ID.

#### Request

- **Method**: DELETE
- **URL**: [{{Host}}/api/{{userId}}](https://hng-stage-two-n49x.onrender.com/api/64ff2c26e8c0b498646cfd60)

#### Response

##### Success Response

- **Status Code**: 200 OK
- **Response Body**: The response contains a message confirming that the user has been deleted.

```json
{
    "message": "Person deleted successfully"
}
```

##### Possible Failed Response

- **Status Code**: 404 Not Found
- **Response Body**: The response contains a message saying the user wasn't found.

## Variables

- `Host`: [https://hng-stage-two-n49x.onrender.com](https://hng-stage-two-n49x.onrender.com)
- `Local`: [http://localhost:3000](http://localhost:3000)

```

This Markdown file provides documentation for the Stage Two API, including endpoints for creating, fetching, updating, and deleting user information. It includes details on request methods, headers, request bodies, and response structures for each endpoint.