let SERVER = "";

if (process.env.REACT_APP_ENV === "local") {
    SERVER = "http://127.0.0.1:5000"
};

const API = {
    TEST:  "/test",
    TESTLOGIN: "/test/testlogin",
    LOGIN:  "/user/login",
    ADDIMAGE: "/image/uploadImage",
    DELETEIMAGE: "/image/deleteImage",
    GETIMAGE: "/image/getImage"
};

for (var endpoint in API) {
    API[endpoint] = SERVER + API[endpoint];
};

export default API