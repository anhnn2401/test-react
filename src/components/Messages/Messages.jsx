import React, { Component } from 'react';
import FormAddMessages from './FormAddMessage';
import ListMessages from './ListMessages';
import Search from './Search';
import Sort from './Sort';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/Messages/Messages'



class Messages extends Component{
  // constructor(props){
  //   super(props);
  // }
  
  componentDidMount() {
    // console.log('dismount',this.props);
    this.props.dispatch(actions.listAll())
  }
  onClearData = () => {
  }
  onToggleFormMessage = () => {
    this.props.onToggleFormMessage();
    this.props.onClearData({
      id : '',
      name : '',
      content : '',
      status : false
    })
  }
  render() {
    const isDisplay = this.props.isDisplay;
    // console.log(isDisplay);
    return (
      <div>
        <h1 className="d-flex justify-content-center">Tin nhắn</h1>
        <div className="row control-button">
          <Button
            onClick={this.onToggleFormMessage}
          >{isDisplay ? "Đóng" : "Thêm tin nhắn"}</Button>
          <Search/>
          <Sort/>
        </div>
        <div className="row">
          <div className={isDisplay? "col-4" : "hidden"}>
            <FormAddMessages/>
          </div>
          <div className={isDisplay? "col-8" : "col-12"}>
            <div className="panel panel-success">
              <div className="panel-heading">
                <h1 
                  className="panel-title"
                  style={{textAlign: 'center'}}>Danh sách tin nhắn</h1>
              </div>
              <div className="panel-body">
               {/* list item */}
                <ListMessages/>
              </div>
            </div>
          </div>
          {/* <div className="col-3">
            <h1>Tùy chọn tin nhắn</h1>
          </div> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplay : state.messages.isDisplayForm,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch : () => {},
    onToggleFormMessage : () => {
      dispatch(actions.toggleForm())
    },
    onClearData : (dataListMessage) => {
      dispatch(actions.editMessage(dataListMessage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages);