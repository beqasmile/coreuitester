import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import carsData from './CarsData'

class   CarSingleComponent extends React.Component 
{

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    console.log(this.props.match.params.redirectParam);
  }


  componentDidMount() {

    fetch('https://localhost:44303/api/Drivers/GetCarByID/' )


    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    
    
  }

  render(){
    return <div>Loading...</div>;
  }
}

//   const car = carsData.find( car => car.id.toString() === match.params.id)
//   const carDetails = car ? Object.entries(car) : 
//     [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

//   return (
//     <CRow>
//       <CCol lg={6}>
//         <CCard>
//           <CCardHeader>
//             Car id: {match.params.id}
//           </CCardHeader>
//           <CCardBody>
//               <table className="table table-striped table-hover">
//                 <tbody>
//                   {
//                     carDetails.map(([key, value], index) => {
//                       return (
//                         <tr key={index.toString()}>
//                           <td>{`${key}:`}</td>
//                           <td><strong>{value}</strong></td>
//                         </tr>
//                       )
//                     })
//                   }
//                 </tbody>
//               </table>
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   )
// }

export default CarSingleComponent;
