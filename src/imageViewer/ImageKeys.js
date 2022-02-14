import { List, Divider, Card } from 'antd';
import { connect } from "react-redux";
import { actions } from '../redux/action';

const ImageKeys = (props) => {


    console.log(props);
    return (
        <div>
            <Divider>Type in a key</Divider>
            This is image searcher
            <Divider>or select from below</Divider>
            <List
                size="small"
                header={null}
                footer={null}
                bordered
                dataSource={props.keys}
                renderItem={item => 
                <Card
                    hoverable
                    size="small"
                >
                    {item}
                </Card>}
            />
        </div>
    );
}


const actionsCreactor = {
    getAllKeys: actions.getAllImageKeys,
};

const mapState = (state) => {
    console.log(state.actionReducer.keys);
    return { keys: state.actionReducer.keys};
};


export default connect(mapState, actionsCreactor)(ImageKeys);