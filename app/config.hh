<?hh //strict
enum HTTP: string as string {
	GET = 'GET';
	POST = 'POST';
	PUT = 'PUT';
	DELETE = 'DELETE';
	PATCH = 'PATCH';
}
enum AppEnv: string as string {
	API = 'API';
	UNIT_TESTS = 'UNIT_TESTS';
	MAIN = 'MAIN';
	DAEMON = 'DAEMON';
	PRODUCTION = 'PRODUCTION';
	DEVELOPMENT = 'DEVELOPMENT';
}
enum ExceptionCode:int as int {
	GENERIC = 1;
	NOT_FOUND = 2;
	NETWORK_ERROR = 3;
	DELETED = 4;
}
