import React from 'react';

const CustomerTable = () => {
  const data = [
    { sno: 1, customer_name: 'John Doe', age: 30, phone: '123-456-7890',  location: 'New York', date: '2024-03-01', time: '12:00' },
    { sno: 2, customer_name: 'Jane Smith', age: 25, phone: '987-654-3210', location: 'San Francisco', date: '2024-03-02', time: '10:30' },
   
    {sno: 3, customer_name:'Alice Johnson', age:35,  phone: '789-012-3456',  location: 'Chicago', date: '2024-03-01', time: '12:00'},
    {sno: 4, customer_name:'Bob Brown', age:40, phone:'012-345-6789',  location:'Houston', date:'2024-03-01', time: '12:00'},
   
    {sno: 5, customer_name:'Emily Davis',age: 28,phone: '345-678-9012',  location:'San Francisco', date:'2024-03-01', time: '12:00'},
    {sno: 6, customer_name:'Michael Wilson',age: 45, phone:'678-901-2345',  location:'Miami', date:'2024-03-01', time: '12:00'},
 
    {sno: 7, customer_name:'Sarah Taylor',age: 32, phone:'901-234-5678',  location:'Seattle', date:'2024-03-01', time: '12:00'},
    {sno: 8, customer_name:'David Martinez',age: 37, phone:'234-567-8901', location: 'Boston', date:'2024-03-01', time: '12:00'},
 
    {sno: 9, customer_name:'Jessica Rodriguez',age: 29, phone:'567-890-1234',  location:'Denver', date:'2024-03-01', time: '12:00'},
    {sno: 10, customer_name:'Christopher Anderson', age:42,phone: '890-123-4567',  location:'Phoenix', date:'2024-03-01', time: '12:00'},
   
    {sno: 11, customer_name:'Jennifer Garcia', age:34, phone:'012-345-6789', location: 'Dallas', date:'2024-03-01', time: '12:00'},
    {sno: 12 ,customer_name:'Matthew Lopez', age:39, phone:'234-567-8901',  location:'Atlanta', date:'2024-03-01', time: '12:00'},

    {sno: 13, customer_name:'Amanda Hernandez', age:31, phone:'456-789-0123', location: 'Philadelphia', date:'2024-03-01', time: '12:00'},
    {sno: 14, customer_name:'James King',age: 44, phone:'678-901-2345',  location:'Detroit', date:'2024-03-01', time: '12:00'},
    
    {sno: 15, customer_name:'Laura Perez', age:27,phone: '789-012-3456',  location:'Portland',date:'2024-03-01', time: '12:00'},
    {sno: 16, customer_name:'Daniel Gonzales', age:38, phone:'901-234-5678', location: 'Las Vegas', date:'2024-03-01', time: '12:00'},
  
    {sno: 17, customer_name:'Elizabeth Lee', age:33, phone:'012-345-6789',  location:'San Diego', date:'2024-03-01', time: '12:00'},
    {sno: 18, customer_name:'Kevin Scott', age:41, phone:'234-567-8901',  location:'Minneapolis',date:'2024-03-01', time: '12:00'},
  
    {sno: 19, customer_name:'Megan Young', age:26, phone:'345-678-9012',  location:'Salt Lake City', date:'2024-03-01', time: '12:00'},
    {sno: 20, customer_name:'Steven Adams', age:43,phone: '567-890-1234', location: 'Charlotte', date:'2024-03-01', time: '12:00'},

    
    {sno: 21, customer_name:'Rachel Turner',age: 36, phone:'678-901-2345',  location:'Orlando', date:'2024-03-01', time: '12:00'},
    {sno: 22, customer_name:'Andrew Campbell',age: 30,phone: '890-123-4567', location: 'San Antonio', date:'2024-03-01', time: '12:00'},
   
    {sno: 23, customer_name:'Rebecca Phillips',age: 40, phone:'901-234-5678',  location:'Kansas City', date:'2024-03-01', time: '12:00'},
    {sno: 24, customer_name:'Thomas Hill', age:35, phone:'012-345-6789',  location:'Tampa',  date:'2024-03-01', time: '12:00' },
    
    {sno: 25, customer_name:'Michelle Torres', age:29,phone: '234-567-8901',  location:'Raleigh',  date:'2024-03-01', time: '12:00' },
    {sno: 26, customer_name:'Brandon Powell', age:45,phone: '345-678-9012',  location:'Indianapolis',  date:'2024-03-01', time: '12:00' },
    
    {sno: 26, customer_name:'Stephanie Ward', age:31, phone:'456-789-0123', location: 'Nashville',  date:'2024-03-01', time: '12:00' },
    {sno: 27, customer_name:'Eric Bailey', age:39, phone:'567-890-1234',  location:'Memphis',  date:'2024-03-01', time: '12:00' },
   
    {sno: 28, customer_name:'Kimberly Foster',age: 28, phone:'678-901-2345', location: 'Louisville',  date:'2024-03-01', time: '12:00' },
    {sno: 29, customer_name:'Patrick Murphy', age:42, phone:'789-012-3456',  location:'Columbus',  date:'2024-03-01', time: '12:00' },
  
    {sno: 30, customer_name:'Cassandra Simmons',age: 32, phone:'901-234-5678', location: 'Milwaukee',  date:'2024-03-01', time: '12:00' },
    {sno: 31, customer_name:'Gregory Diaz', age:44, phone:'012-345-6789', location: 'Albuquerque',  date:'2024-03-01', time: '12:00' },
   
    {sno: 32, customer_name:'Christina Barnes', age:27, phone:'234-567-8901', location: 'Oklahoma City',  date:'2024-03-01', time: '12:00' },
    {sno: 33, customer_name:'Joshua Ross', age:43, phone:'345-678-9012',  location:'Honolulu',  date:'2024-03-01', time: '12:00' },
  
    {sno: 34, customer_name:'Nicole Coleman', age:33,phone: '456-789-0123',  location:'Anchorage',  date:'2024-03-01', time: '12:00' },
    {sno: 35, customer_name:'Keith Alexander',age: 41,phone: '567-890-1234', location: 'Boise',  date:'2024-03-01', time: '12:00' },
 
    {sno: 36, customer_name:'Monica Kelly',age: 26, phone:'678-901-2345',  location:'Des Moines',  date:'2024-03-01', time: '12:00' },
    {sno: 37, customer_name:'Jeremy Griffin', age:40,phone: '789-012-3456',  location:'Fargo',  date:'2024-03-01', time: '12:00' },

    {sno: 38, customer_name:'Vanessa Bryant', age:34, phone:'901-234-5678',  location:'Montgomery',  date:'2024-03-01', time: '12:00' },
    {sno: 39, customer_name:'Justin Nguyen', age:39, phone:'012-345-6789', location: 'Jackson',  date:'2024-03-01', time: '12:00' },

    {sno: 40, customer_name:'Carolyn Reed', age:28, phone:'234-567-8901', location: 'Baton Rouge',  date:'2024-03-01', time: '12:00' },
    {sno: 41, customer_name:'Terry Adams', age:42, phone:'345-678-9012',  location:'Little Rock', date:'2024-03-01', time: '12:00' },

    {sno: 42, customer_name:'Katherine Hamilton', age:35,phone: '456-789-0123',  location:' Salt Lake City',date:'2024-03-01', time: '12:00'  },
    {sno: 43, customer_name:'Kyle Cox', age:41, phone:'567-890-1234', location: 'Louisville',date:'2024-03-01', time: '12:00'  },
  
    {sno: 44, customer_name:'Hannah Morales', age:29,phone: '678-901-2345', location: 'Columbia', date:'2024-03-01', time: '12:00' },
    {sno: 45, customer_name:'Gerald Vasquez', age:43, phone:'789-012-3456', location: 'Charleston',date:'2024-03-01', time: '12:00'  },
    {sno: 46, customer_name:'Megan Young', age:26, phone:'345-678-9012',  location:'Salt Lake City', date:'2024-03-01', time: '12:00'},
    {sno: 47, customer_name:'Steven Adams', age:43,phone: '567-890-1234', location: 'Charlotte', date:'2024-03-01', time: '12:00'},

    
    {sno: 48, customer_name:'Rachel Turner',age: 36, phone:'678-901-2345',  location:'Orlando', date:'2024-03-01', time: '12:00'},
    {sno: 49, customer_name:'Andrew Campbell',age: 30,phone: '890-123-4567', location: 'San Antonio', date:'2024-03-01', time: '12:00'},
   
    { sno: 50, customer_name: 'Zack', age: 50, phone: '543-210-9876', location: 'Oklahoma city', date: '2024-03-02', time: '11:00' }
  ];
  const generateDummyData = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.sno}</td>
        <td>{item.customer_name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Customer Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {generateDummyData()}
      </tbody>
    </table>
  );
};

export default CustomerTable;

