// import React, { Component } from 'react';
// import axios from 'axios';
// import moment from 'moment';
// class CustomerWithTraining extends Component {
//    state = {customers : []}
//    async componentWillMount(){
//      const {data} = await axios.get('https://customerrest.herokuapp.com/gettrainings')
//      this.setState({customers: data})
//    }
//   render() {
//     return (
//       <div>
//       <table className="table">
//       <thead>
//         <tr>
//           <th>FirstName</th>
//           <th>LastName</th>
//           <th>StreetAddress</th>
//           <th>PostCode</th>
//           <th>City</th>
//           <th>Phone</th>
//           <th>Activity</th>
//           <th>Duration</th>
//           <th>Date</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
        
//         {this.state.customers.map(item  => (
//  <tr key = {item.id}>
//  <td>{item.customer.firstname}</td>
//  <td>{item.customer.lastname}</td>
//  <td>{item.customer.streetaddress}</td>
//  <td>{item.customer.postcode}</td>
//  <td>{item.customer.city}</td>
//  <td>{item.customer.phone}</td>
//  <td>{item.activity}</td>
//  <td>{item.duration}</td>
//  <td>{moment(item.date).format("DD-MM-YYYY")}</td>
// </tr>
// ))}
//       </tbody>
//     </table>
//     </div>
//     );
//   }
// }

// export default CustomerWithTraining;