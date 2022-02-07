let SERVER = "";

if (process.env.REACT_APP_ENV === "local") {
    SERVER = "http://localhost:3001"
};

const API = {
    TEST:  "/test",
    LOGIN:  "/user/login",
    ADDIMAGE: "/image/uploadImage",
    DELETEIMAGE: "/image/deleteImage",
    GETIMAGE: "/image/getImage"
};

API.map((endpoint) => {
    endpoint = SERVER + endpoint;
});

export default API