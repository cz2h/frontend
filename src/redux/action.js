const userActions = {
    LOGIN: "LOGIN",
    UPLOAD_IMAGE: "UPLOAD_IMAGE",
    DELETE_IMAGE: "DELETE_IMAGE",
    GET_IMAGE: "GET_IMAGE",
};
  
const actions = {
    login: login,
    uploadImage: uploadImage,
    deleteImage: deleteImage,
    getImage: getImage
};

function success(type, data) {
    return { type: type, data : data};
}

function login(data){
    return (dispatch) => {
        dispatch(success(userActions.LOGIN, data));
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