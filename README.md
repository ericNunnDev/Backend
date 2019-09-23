![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)

# Local Voter Guide Backend API - Eric Nunn

## Description
The Local Voter Guide API is designed to be used to educate members of the United States Electorate about candidates, candidates political positions, candidates contact information; plus voting times and locations based on a location users enter.

#### Backend delpoyed at [Heroku](https://localvoterguide-backend.herokuapp.com/) <br>

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm start** to start the local server
- **knex migrate:latest --env=testing** To set up the testing database.
- **npm test** to start server using testing environment
- **knex migrate:latest** to create the tabes in the dev environment
- **knex seed:run** to clear the DB and populate it with seed data **** Password for all seed users is "password" ****

## Technology Stack
- Express
- JSON Web Tokens (JWT) 
- BcryptJS
- Axios
- Knex 
- FakerJS 
- SQLite3 

## Data Schema (data structure)

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

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [e.nunn1009@gmail.com]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
