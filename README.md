# Backend - Eric Nunn

##### Data Schema (data structure)

`Candidate`

```
{
    "candidate_name":"Hilma Eichmann",
    "political_party":"Democrat",
    "email":"Toy_Pollich@gmail.com",
    "phone_number":"(091) 926-3914",
    "state":"NJ",
    "zip":"58778-3836"
}
```

`User`

```
{
    "username":'admin',  // required
    "password":'admin'   // required
}
```
`Test user account`

```
username:admin
password:password

username:eric
password:eric
```

| Method | Endpoint            | Description                                                                                                                                                                                             |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register           | Register a new `user` using the information provided in the command.                                                                                                                           |
| POST   | /login              | Use the credentials provided in the command to authenticate the user. On successful login, display a message with the username and a JWT token                                                           |
| GET    | /candidates            | If the `user` is logged in, display an array of all the `candidates` contained in the database. If the `user` is not logged in, display a message:"No token provided, must be set on Authorization Header" |
| GET    | /candidates/:id        | If the `user` is logged in, display an object of the `candidate`                                                                                                                                          |
| PUT    | /candidates/:id        | Updates a `candidate` with new information and display the updated `candidate`'s details                                                                                                                                      |
| POST   | /candidates            | Creates a new `candidate` and dispalys the `id` of the created `candidate`                                                                                                                                     |
### GET:

###### /candidates

- returns a list of candidates

```
axios
    .get('yourURL/candidates')
    .then(res=> console.log(res))
    .catch(err=>console.log(err))
```

- console logs

```
       [
    {
        "id":1,
        "candidate_name":"Hilma Eichmann",
        "political_party":"Democrat",
        "email":"Toy_Pollich@gmail.com",
        "phone_number":"(091) 926-3914",
        "state":"NJ",
        "zip":"58778-3836"
    },
    {
        "id":2,
        "candidate_name":"Chasity Volkman",
        "political_party":"Democrat",
        "email":"Marie46@yahoo.com",
        "phone_number":"1-330-261-8815",
        "state":"CO",
        "zip":"47299"
    }]
```

###### /candidates/:id

- returns a candidate object with the specified id

```
axios
    .get('yourURL/candidates/1')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
```

- console logs

```
    {
        "id":1,
        "candidate_name":"Hilma Eichmann",
        "political_party":"Democrat",
        "email":"Toy_Pollich@gmail.com",
        "phone_number":"(091) 926-3914",
        "state":"NJ",
        "zip":"58778-3836"
    }
```

### POST:

###### /register

- register an user and returns the id of the created user

- returns
```
{
    "userId": 9,
    "username": "admin",
    "token": "gakjsdgfjkwhgjfgmjagjhgfkeawgwaefsdfsadfasefsafsafas",
    "user_type": "voter"
}
```

###### /login

- logs the user in and returns a token
```
{
    "userId": "9",
    "username": "admin",
    "user_type": "voter",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbXNpbiIsImlhdCI6MTU0OTU5ODY2MX0.JsWkCCCjRg9pDzJ3LOTTW8wf3tjqQ6129u8SHTEt7mA"
}
```

### PUT:

###### /candidates/:id

- Updates an existing candidate with the change, and returns the id of the candidate selected

```
axios
    .put('yourURL/candidates/id',change)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
```

### DELETE:

###### /candidates/:id

- Removes the selected candidate, and returns message upon successful request

```
axios
    .delete('yourURL/candidates/id')
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
```