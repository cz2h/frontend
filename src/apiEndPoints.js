let SERVER =  process.env.REACT_APP_HOST;

if (process.env.REACT_APP_ENV === "local" || SERVER === '') {
    SERVER = 'http://localhost:5000';
};

console.log(SERVER);

const API = {
    TEST:  "/test",
    TESTLOGIN: "/test/testlogin",
    LOGIN:  "/user/login",
    UPLOADIMAGE: "/api/upload",
    DELETEIMAGE: "/image/deleteImage",
    GETIMAGE: "/api/key",
    GETALLKEYS: "/api/list_keys",
    GETCACHESTATS: "/api/memcache/stat",
    POSTCACHESETTING: "/api/memcache/set",
};

for (var endpoint in API) {
    API[endpoint] = SERVER + API[endpoint];
};

export default API