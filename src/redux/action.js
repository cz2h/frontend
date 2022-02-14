const userActions = {
    LOGIN: "LOGIN",
    UPLOAD_IMAGE: "UPLOAD_IMAGE",
    DELETE_IMAGE: "DELETE_IMAGE",
    GET_IMAGE: "GET_IMAGE",
    GET_ALL_KEYS: "GET_ALL_KEYS"
};
  
const actions = {
    login: login,
    uploadImage: uploadImage,
    deleteImage: deleteImage,
    getImage: getImage,
    getAllImageKeys: getAllImageKeys
};

function success(type, data) {
    return { type: type, data : data};
}

function login(data){
    return (dispatch) => {
        dispatch(success(userActions.LOGIN, data));
    };
}

function getAllImageKeys(data) {
    return (dispatch) => {
        dispatch(success(userActions.GET_ALL_KEYS, data));
    };    
}

// TO BE IMPLEMENTED
function uploadImage(data) {
}

// TO BE IMPLEMENTED
function deleteImage(){

}

// TO BE IMPLEMENTED
function getImage(data) {

}

export { actions, userActions};