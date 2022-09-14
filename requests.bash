# base url http://127.0.0.1:3001

# Get /
$ curl 127.0.0.1:3001/

# GET /users
$ curl 127.0.0.1:3001/user | json_pp |  batcat

# Post /users

$ curl -X POST  127.0.0.1:3001/user  -H 'Content-Type: application/json' -d '{"name":"Monique"}' | json_pp | batcat

