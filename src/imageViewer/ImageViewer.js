import { useState, useEffect } from 'react';
import { connect } from "react-redux";


import { Row, Col, Image, Card } from 'antd';
import ImageKeys from './ImageKeys';

import postRequest from '../rpcCalls/postRequest';

import { actions } from '../redux/action';

const style = { padding: '8px 0' };


const ImageViewer = (props) => {
    let curImageURL = props.curImage;

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
        <Row gutter={16}>
            <Col span={4} className="gutter-row">
                <div style={style}>
                    <ImageKeys/>
                </div>
            </Col>
            <Col span={18} className="gutter-row">
            {curImageURL === '' ?
                null
                :
                <div style={style} >
                  <Image
                        textAlign={'center'}
                        src={"data:image/jpg;base64, " + curImageURL}
                    /> 
                </div>
            }
            </Col>
        </Row>
    )
}

const actionsCreactor = {
    getAllKeys: actions.getAllImageKeys,
};

const mapState = (state) => {
    return {curImage:state.actionReducer.curImage};
};


export default connect(mapState, actionsCreactor)(ImageViewer);;