'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');


Route.post('/api/pids', 'PidController.store');

Route.resource('/api/pids', 'PidController')
    .only(['index', 'show', 'update'])
    .middleware('auth');

Route.resource('/api/ae15ms', 'AE15mController')
  .only(['index', 'show'])
  .middleware('auth');

Route.post('/api/token-auth', 'SessionController.store');
