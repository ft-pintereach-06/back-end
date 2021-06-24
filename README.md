# back-end

# Pintereach API

## https://ft-pintereach-06.herokuapp.com/

### What To Know About This API

I've made a LOT of endpoints. Some will be useful, some are just for reference, some will need further work if we find holes! JSON examples listed underneath this list. Don't care about reference? These are the ones you want:

### [GET] /api/articles/all
**_RESTRICTED ENDPOINT_**
See the list of articles w/ data, regardless of user_id

### [GET] /api/articles/
**_RESTRICTED ENDPOINT_**
See the list of articles w/ data for the logged in user

### [GET] /api/articles/:id
**_RESTRICTED ENDPOINT_**
Can search for articles by id

### [POST] /api/articles/
**_RESTRICTED ENDPOINT_**
Create an article

### [DELETE] /api/articles/:id
**_RESTRICTED ENDPOINT_**
User can remove an article using the id

### [GET] /api/users/
**_RESTRICTED ENDPOINT_**
Can see a list of users w/ information

### [GET] /api/users/:user_id
**_RESTRICTED ENDPOINT_**
Can see a specific user's information

### [POST] /api/auth/register
Create a new user.

> **_ Required information _**
> username
> password
### [POST] /api/auth/login

Logs in a user, receives a token for authorization
Currently, I have created a "Primary" and "Secondary" user with passwords as "password" with some different dummy articles assigned to them.
