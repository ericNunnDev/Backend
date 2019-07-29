# Backend - Eric Nunn

| Method | Endpoint            | Description                                                                                                                                                                                             |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register           | Register a new `user` using the information provided in the command.                                                                                                                           |
| POST   | /login              | Use the credentials provided in the command to authenticate the user. On successful login, display a message with the username and a JWT token                                                           |

### POST:

###### /register

- register an user and returns the id of the created user

- returns
```
{
    "userId": 9,
    "username": "admsin",
    "token": "gakjsdgfjkwhgjfgmjagjhgfkeawgwaefsdfsadfasefsafsafas",
    "user_type": "employee"
}
```

###### /login

- logs the user in and returns a token
```
{
    "userId": "9",
    "username": "admsin",
    "user_type": "employee",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbXNpbiIsImlhdCI6MTU0OTU5ODY2MX0.JsWkCCCjRg9pDzJ3LOTTW8wf3tjqQ6129u8SHTEt7mA"
}
```