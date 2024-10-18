import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

const CarVendorsContext = createContext();

const CarVendorsProvider = ({ children }) => {
    const [vendors, setVendors] = useState([
        { id: 1, name: 'Toyota' },
        { id: 2, name: 'BMW' },
        { id: 3, name: 'Mercedes' },
    ]);

    return (
        <CarVendorsContext.Provider value={vendors}>
            {children}
        </CarVendorsContext.Provider>
    );
};

const CarVendorsList = () => {
    const vendors = useContext(CarVendorsContext);

    return (
        <div>
            <h2>Car Vendors</h2>
            <ul>
                {vendors.map((vendor) => (
                    <li key={vendor.id}>{vendor.name}</li>
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    return (
        <CarVendorsProvider>
            <CarVendorsList />
        </CarVendorsProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
