import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/Messages/Messages'

class ListMessages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterName: '',
      filterStatus: -1,
      keyword: '',
    }
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value === 'checkbox' ? target.checked : target.value;
    let filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    }
    this.props.onFilterMessage(filter);
    this.setState({
      [name]: value
    });
  }
  onChangeStatus = (id) => {
    this.props.onChangeStatus(id);
  }
  onEditMessage = (dataEdit) => {
    this.props.onOpenFormEdit();
    this.props.onEditMessage(dataEdit);
  }
  onDeleteMessage = (id) => {
    this.props.onDeleteMessage(id);
  }
  render() {
    let {
      dataMessages,
      filter,
      keyword,
      sort
    } = this.props;
    let filterName = filter.name;
    let filterStatus = filter.status;

    // filter
    if (filter) {
      if (filter.name) {
        dataMessages = dataMessages.filter((dataMessage) => {
          return dataMessage.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      dataMessages = dataMessages.filter((dataMessage) => {
        if (filter.status === -1) {
          return dataMessage;
        } else {
          return dataMessage.status === (filter.status === 1 ? true : false);
        }
      });
    }
    //search
    if (keyword) {
      dataMessages = dataMessages.filter((dataMessage) => {
        // return dataMessage.name.toLowerCase().indexOf(keyword) !== -1;
        return (dataMessage.name.toLowerCase().indexOf(keyword) !== -1) || (dataMessage.content.toLowerCase().indexOf(keyword) !== -1);
      });
    }
    //sort
    if (sort.by === 'name') {
      dataMessages.sort((a, b) => {
        if (a.name > b.name) {
          return sort.value; // tra ve 1 thi la tang dan nguoc lai la giam dan
        } else if (a.name < b.name) {
          return -sort.value; // // tra ve -1 thi la tang dan nguoc lai la giam dan
        } else {
          return 0;
        }

      });
    } else {
      dataMessages.sort((a, b) => {
        if (a.status > b.status) {
          return -sort.value;
        } else if (a.status < b.status) {
          return sort.value;
        } else {
          return 0;
        }

      });
    }

    const listMessages = dataMessages.map((dataListMessage, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{dataListMessage.name}</td>
          <td>{dataListMessage.content}</td>
          <td>
            <button
              type="button"
              className={dataListMessage.status ? "btn btn-success" : "btn btn-danger"}
              onClick={() => this.onChangeStatus(dataListMessage.id)}
            >{dataListMessage.status ? 'Kích hoạt' : 'Ẩn'}
            </button>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.onEditMessage(dataListMessage)}
            >
              Sửa
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.onDeleteMessage(dataListMessage.id)}
            >
              Xóa
            </button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Message</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="filterName"
                  value={filterName}
                  onChange={this.onChange}
                />
              </td>
              <td>
                {/* <input
                  type="text"
                  className="form-control"
                  name="filterName"
                  value={filterName}
                  onChange={this.onChange}
                /> */}
              </td>
              <td>
                <select
                  className="form-control"
                  name="filterStatus"
                  value={filterStatus}
                  onChange={this.onChange}>
                  <option value={-1}>Tất Cả</option>
                  <option value={0}>Ẩn</option>
                  <option value={1}>Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {listMessages}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log('state',state.messages.sort);
  return {
    filter: state.messages.filter,
    dataMessages: state.messages.data,
    keyword: state.messages.keyword,
    sort: state.messages.sort,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeStatus: (id) => {
      dispatch(actions.changeStatus(id))
    },
    onEditMessage: (dataListMessage) => {
      dispatch(actions.editMessage(dataListMessage))
    },
    onDeleteMessage: (dataEditMessage) => {
      dispatch(actions.deleteMessage(dataEditMessage))
    },
    onOpenFormEdit: () => {
      dispatch(actions.openForm())
    },
    onFilterMessage: (filter) => {
      dispatch(actions.filterMessage(filter))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMessages);

