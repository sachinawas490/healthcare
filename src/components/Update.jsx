import React, { useContext, useState, useEffect } from 'react';
import { hcontext } from '../context'; // Adjust path as necessary
import { useNavigate } from 'react-router-dom';

function Update() {
    const { index, data, setdata } = useContext(hcontext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    
    useEffect(() => {
        if (data.length > 0 && index !== null) {
            const serviceToUpdate = data[index];
            setName(serviceToUpdate.name);
            setDescription(serviceToUpdate.description);
            setPrice(serviceToUpdate.price);
        }
    }, [data, index]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedService = { name, description, price };
        const updatedData = data.map((service, idx) => (idx === index ? updatedService : service));
        setdata(updatedData); // Update context with new data
        navigate('/'); // Navigate back to the main page after updating
    };

    const handleDelete = () => {
        const updatedData = data.filter((_, idx) => idx !== index);
        setdata(updatedData); // Remove the service from context
        navigate('/'); // Navigate back after deletion
    };

    return (
        <div className="max-w-md mx-auto my-10 p-5 border-2 border-yellow-400 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Update Service</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label className="block text-gray-300">Service Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-yellow-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block ">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-yellow-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border border-yellow-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="btn btn-primary">Update</button>
                    <button type="button" onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </form>
        </div>
    );
}

export default Update;
