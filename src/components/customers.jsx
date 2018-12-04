import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import AddCustomer from './addCustomer';
import InsertTraining from './insertTraining';
class Customers extends Component {
    constructor(props){
        super(props);
        this.state = {customers : [], date: '', duration:'', activity:''}
    }
componentDidMount(){
    this.fetchCustomer();
}
fetchCustomer = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then((response) => response.json()) 
    .then((responseData) => { 
      this.setState({ 
        customers: responseData.content,
      }); 
    })
    .catch(err => console.error(err)); 

}
onDelClick = (link) => {
    fetch(link, {method: 'DELETE'})
    .then(res => {
      toast.success("customer deleted", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      this.fetchCustomer();
    })
    .catch(err => {
      toast.error("Error when deleting", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      console.error(err)
    }) 
   }
  confirmDelete = (link) => {
    confirmAlert({
      message: 'Are you sure to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.onDelClick(link)
        },
        {
          label: 'No',
        }
      ]
    })
  }
  renderEditable = (cellInfo)=>{
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.customers];
          data[cellInfo.index][cellInfo.column.id] = 
           e.target.innerHTML;
          this.setState({ customers: data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.customers[cellInfo.index][cellInfo.column.id]
        }} 
      />
    );

  }

//update customer
updateCustomer(car, link) {
  fetch(link, 
  { method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car)
  })
  .then( res =>
    toast.success("Changes saved", {
      position: toast.POSITION.BOTTOM_LEFT
    }) 
  )
  .catch( err => 
    toast.error("Error when saving", {
      position: toast.POSITION.BOTTOM_LEFT
    }) 
  )
}




  addCustomer(car) {
    fetch( 'https://customerrest.herokuapp.com/api/customers', 
      { method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car)
      })
    .then(res => this.fetchCustomer())
    .catch(err => console.error(err))
  } 

  









    render() {
        const columns = [
          {
            Header: 'Add Training',
            id: 'addbtn',
            sortable: false,
            filterable:false,
            accessor: 'links[0].href',
            Cell: ({value}) => (<InsertTraining 
              addTrainings = {this.addCustomer} 
              date = {this.state.date}
              customers ={(value)}/>)
          },
          {
            Header: 'Firstname',
            accessor: 'firstname',
            Cell: this.renderEditable
          }, {
            Header: 'Lastname',
            accessor: 'lastname',
            Cell: this.renderEditable
          }, {
            Header: 'Address',
            accessor: 'streetaddress',
            Cell: this.renderEditable
          }, {
            Header: 'City',
            accessor: 'city',
            Cell: this.renderEditable
          }, {
            Header: 'Email',
            accessor: 'email',
            Cell: this.renderEditable
          },
          {
            Header: 'Phone',
            accessor: 'phone',
            Cell: this.renderEditable

        },
        {
            id: 'delbutton',
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: ({value}) => (<button className = "btn btn-danger" onClick={()=>{this.confirmDelete(value)}}>Delete</button>)
          }, 
          {
            id: 'savebutton',
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: ({value, row}) => 
              (<button onClick={()=>{this.updateCustomer(row, value)}}>
               Save</button>)
          }
        ]
        return (
            <div>
            <AddCustomer addCustomer={this.addCustomer} fetchCustomer={this.fetchCustomer}/>
                <ReactTable 
                data = {this.state.customers} 
                columns = {columns} 
                filterable = {true}
                defaultPageSize = {5}/>
                <ToastContainer autoClose={1500} /> 
            </div>
              );
    }
}

export default Customers;