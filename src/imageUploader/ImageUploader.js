import { useState } from "react";
// import { connect } from "react-redux";
import postRequest from "../rpcCalls/postRequest";

const ImageUploader = () => {
    const [errorMessage, setMessage] = useState("");
    const [imageKey, setImageKey] = useState("");

    const myProps = {
        onChange(info) {
            let file = info.file;
            if (file.status !== 'uploading') {
                if (! file.type.includes('image')) {
                    setMessage("You should only uplode images");
                } else {
                    let response = postRequest.postImage(imageKey, info.file);
                    if (response.success !== "true") {
                        setMessage(response.error.message);
                    }
                }
            }
        },
    };
      
    return (    
        <div>
            <input type="text"
                placeholder="Key of the image"
                onChange={(e) => {
                    let imageKey = e.target.value;
                    setImageKey(imageKey);
                }}
            />
            <input
                type="file"
                onChange={(e) => {
                        [...e.target.files].map((file) => {
                        myProps.onChange({ file: file });
                    });
                }}
            />
            {errorMessage}
        </div>
    );
}

// const actionsCreactor = {
//     // uploadImage: actions.ImageUploader;
// };

// const mapState = (state) => {
//   return { ...state.actionReducer};
// };

// export default connect(mapState, actionsCreactor)(ImageUploader);

export default ImageUploader;