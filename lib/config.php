<?
require_once('api.php');
require_once('routes.php');

$api = new Api();

/*
Example route
	$myroute = new Route('/users', Route::GET, $api.getUsers());
*/

$ROUTES = array(
	new Route('/user', Route::GET, array($api, 'getCurrentUser'))	
);
