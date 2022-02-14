import axios from "axios";

import API from "../apiEndPoints";

function debugLog(data) {
    console.log(data);
}

async function postImage(key, file) {
    let formdata = new FormData();
    formdata.append('key', key);
    formdata.append('file', file);

    let res = await axios.post(URL=API.UPLOADIMAGE, formdata);
    debugLog(res.data);
    return res.data;
}

function getAllKeys() {

}



export default { postImage }

