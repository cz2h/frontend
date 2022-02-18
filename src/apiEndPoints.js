let SERVER = "";

if (process.env.REACT_APP_ENV === "local") {
    SERVER = "http://127.0.0.1:5000"
};

const API = {
    TEST:  "/test",
    TESTLOGIN: "/test/testlogin",
    LOGIN:  "/user/login",
    UPLOADIMAGE: "/api/upload",
    DELETEIMAGE: "/image/deleteImage",
    GETIMAGE: "/api/key/",
    GETALLKEYS: "/api/list_keys",
    GETCACHESTATS: "/api/memcache/stat",
    POSTCACHESETTING: "/api/memcache/set",
};

for (var endpoint in API) {
    API[endpoint] = SERVER + API[endpoint];
};

export default API