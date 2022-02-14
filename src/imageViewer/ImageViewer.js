import { useState, useEffect } from 'react';
import { connect } from "react-redux";


import { Row, Col } from 'antd';
import ImageKeys from './ImageKeys';

import postRequest from '../rpcCalls/postRequest';

import { actions } from '../redux/action';



const ImageViewer = (props) => {
    const [curImage, setCurImage] = useState('');
    
    useEffect(() => {
        postRequest.
            postListAllKeys().
            then((keys) => {
                props.getAllKeys(keys);
            }).catch(err => {
                console.error(err);
            })
    });

    return (
        <Row>
            <Col span={8}><ImageKeys/></Col>
            <Col span={16}>The image</Col>
        </Row>
    )
}

const actionsCreactor = {
    getAllKeys: actions.getAllImageKeys,
};

const mapState = (state) => {
    return {};
};


export default connect(mapState, actionsCreactor)(ImageViewer);;