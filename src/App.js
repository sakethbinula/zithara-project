import React, { useState, useEffect } from 'react';
import { fetchData } from './api'; 
import CustomerTable from './CustomerTable';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import './App.css';

const App = () => {


  const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;


    useEffect(() => {
        const fetchDataAndSetState = async () => {
            const newData = await fetchData();
            setData(newData);
        };

        fetchDataAndSetState();
    }, []);

    // Filter data based on search query
    const filteredData = data.filter(item =>
        item.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Paginate data
    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    

    return (
        
        <div>
            <h1><center>Customers Details</center></h1>
            <center><SearchBar setSearchQuery={setSearchQuery} />
            <CustomerTable data={paginatedData} />
            <Pagination
                pageCount={Math.ceil(filteredData.length / pageSize)}
                onPageChange={({ selected }) => setCurrentPage(selected + 1)}
            /></center>
        </div>
    );
};

export default App;
