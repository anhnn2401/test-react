import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/Messages/Messages'


class FormAddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      content: '',
      status: false
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.dataEdit !== this.props.dataEdit) {
      this.setState({
        id : this.props.dataEdit.id,
        name : this.props.dataEdit.name,
        content : this.props.dataEdit.content,
        status : this.props.dataEdit.status
      });
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm();
    this.clearData();
    // console.log(this.props);
  }
  onChangeMessage = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    // if (name === 'status'){
    //   value = event.targer.value === 'true' ? true : false ;
    // }
    this.setState({
      [name]: value
    });
  }
  clearData = () => {
    this.setState ({
      id: '',
      name: '',
      content: '',
      status: false,
    });
  }
  onAddMessage = (data) => {
    data.preventDefault();
    this.props.onAddMessage(this.state);
    this.clearData();
    this.props.onCloseForm();
  }
  // onSendMessage = (event) => {
  //   event.preventDefault();
  //   this.props.onSaveMessage(this.state);
  //   this.clearData();
  //   this.onCloseForm();
  // }
  render() {
    // const dataEdit = this.props.dataEdit;
    let {
      dataEdit
    } = this.props;
    // console.log(this.props.dataEdit);
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>
          { !dataEdit.id ? 'Thêm tin nhắn' : 'Cập nhật tin nhắn'}
        </h1>
        <form className="form-message" onSubmit={this.onAddMessage}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              // value={this.state.name ? this.state.name : "" }
              placeholder="Đến : "
              onChange={this.onChangeMessage}
            />
            <br />
            <input
              type="text"
              className="form-control form-message"
              name="content"
              value={this.state.content}
              placeholder="Content :"
              onChange={this.onChangeMessage}
            >
            </input>
            <br />
            <label>Trạng thái: </label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={ this.state.status }
              onChange={ this.onChangeMessage }
            >
              <option value={true} >Kích hoạt</option>
              <option value={false} >Ẩn</option>
            </select>
          </div>
          <div className="btn d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
            >Gửi</button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onCloseForm}
            >Hủy</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state.messages.formEditing);
  return {
    dataEdit: state.messages.formEditing,
    isDisplay: state.messages.isDisplayForm,
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCloseForm: () => {
      dispatch(actions.closeForm())
    },
    onSaveMessage: (event) => {
      dispatch(actions.saveMessage(event))
    },
    onAddMessage: (data) => {
      dispatch(actions.addMessage(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddMessage)