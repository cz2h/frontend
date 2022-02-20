import { useState } from "react";
// import { connect } from "react-redux";
import postRequest from "../rpcCalls/postRequest";

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const ImageUploader = () => {
    const [errorMessage, setMessage] = useState("");
    const [imageKey, setImageKey] = useState("");

    let state = {
        fileList: [],
        uploading: false,
    }

    const { uploading, fileList } = state;

    const myProps = {
        handleUpload(info) {
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
        onRemove: file => {
            this.setState(state => {
              const index = state.fileList.indexOf(file);
              const newFileList = state.fileList.slice();
              newFileList.splice(index, 1);
              return {
                fileList: newFileList,
              };
            });
          },
        beforeUpload: file => {
            this.setState(state => ({
              fileList: [...state.fileList, file],
            }));
            return false;
          },
        fileList,
    };
      
    return (    
        <div style={{textAlign: 'center'}}>
            Please type in the key of your uploaded image.
            <br/>
            <input type="text"
                placeholder="Key of the image"
                onChange={(e) => {
                    let imageKey = e.target.value;
                    setImageKey(imageKey);
                }}
            />
            <br/>
            <Upload {...myProps}>
                <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
            <Button
                type="primary"
                onClick={myProps.handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
                style={{ marginTop: 16 }}
            >
                {uploading ? 'Uploading' : 'Start Upload'}
            </Button>

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