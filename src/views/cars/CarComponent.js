import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'

class CarComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
     // this.history = useHistory();
      //this.queryPage = useLocation().search.match(/page=([0-9]+)/, '')
      //this.currentPage = Number(this.queryPage && this.queryPage[1] ? this.queryPage[1] : 1)
      // [page, setPage] = useState(currentPage)
    }
    // pageChange = newPage => {
    //   currentPage !== newPage && history.push(`/cars?page=${newPage}`)
    // }
  
    // useEffect() {
    //   currentPage !== page && setPage(currentPage)
    // }, [currentPage, page])
  

    componentDidMount() {

      fetch('https://localhost:44303/api/Drivers/GetAllDrivers' )
  
  
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
     render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>MyError: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <CRow>
            <CCol xl={6}>
              <CCard>
                <CCardHeader>
                  Cars
                  <small className="text-muted"> list</small>
                </CCardHeader>
                <CCardBody>
                <CDataTable
                  items={items}
                  fields={[
                    { key: 'ID', _classes: 'font-weight-bold' },
                    'DriverName',{ key: 'Age', _classes: 'font-weight-bold' }, 'Address', 'DriversLessonTypeValue'
                  ]}
                  hover
                  striped
                  itemsPerPage={10}
                  
                  clickableRows
                  
                 
                />
              
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
           
           
        );
      }
    }


    
  
  
    // render() {
    //   const { error, isLoaded, items } = this.state;
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   } else if (items)
    //   {
    //     return (
    //       <ul>
    //         {items.map(item => (
    //            <li key={item.ID}>
    //                          {item.DriverName} {item.Age}
    //                     </li>
    //         ))}
    //       </ul>
    //     );
    //   }
  
    // }




    // componentDidMount() {
  
    //   fetch('https://jsonplaceholder.typicode.com/todos' )
      
    //     //.then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: res.data 
    //         });
    //       },
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
    // }
  
   
  }

  export default CarComponent;