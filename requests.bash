# base url http://127.0.0.1:3001

#                                    USER
# : =======================================================================
# Get /
$ curl 127.0.0.1:3001/

# GET /users
$ curl 127.0.0.1:3001/users | json_pp |  batcat
# OR 
# GET /users/:id
$ curl 127.0.0.1:3001/users/6321a43fa240fb4d0356e327 | json_pp |  batcat

# Post /users
$ curl -X POST  127.0.0.1:3001/users  -H 'Content-Type: application/json' -d '{"name":"Lucas Pereira", "nickName":"theluposki", "email":"lu@mail.com", "password":"12345678"}' | json_pp | batcat

# PUT /users/:id
$ curl -X PUT  127.0.0.1:3001/users/6321a43fa240fb4d0356e327  -H 'Content-Type: application/json' -d '{"name":"Lucas Pereira de Oliveira", "nickName":"theluposki", "email":"lu@mail.com", "password":"12345678"}' | json_pp | batcat

# DELETE /users/:id
$ curl -X DELETE 127.0.0.1:3001/users/6321a43fa240fb4d0356e327 | json_pp |  batcat

# POST /users/auth
$ curl -X POST  127.0.0.1:3001/users/auth  -H 'Content-Type: application/json' -d '{"email":"lu@mail.com", "password":"12345678"}' | json_pp | batcat

# : =======================================================================
