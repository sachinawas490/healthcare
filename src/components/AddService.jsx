import React, { useContext, useState } from 'react';
import { hcontext } from '../context';
import { useNavigate } from 'react-router-dom';
function AddService() {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicePrice, setServicePrice] = useState('');
    const { setdata } = useContext(hcontext)
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({
      serviceName,
      serviceDescription,
      servicePrice
    });
      setdata((prev) => [...prev, {
        name:  serviceName,
        description:  serviceDescription,
        price:   servicePrice
      }]);
   
    setServiceName('');
    setServiceDescription('');
      setServicePrice('');
      navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-800 border-2 border-amber-500 shadow-sm rounded-md mt-6 shadow-yellow-400">
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
      
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="serviceName">
            Service Name
          </label>
          <input
            id="serviceName"
            type="text"
            className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
            minLength="3"
            placeholder="Enter service name"
          />
        </div>

       
        <div>
          <label className="block text-gray-700 font-medium mb-2 borde border-yellow-300" htmlFor="serviceDescription">
            Service Description
          </label>
          <textarea
            id="serviceDescription"
            className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            required
            minLength="10"
            rows="4"
            placeholder="Enter service description"
          />
        </div>

     
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="servicePrice">
            Service Price (in Rupee)
          </label>
          <input
            id="servicePrice"
            type="number"
            className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={servicePrice}
            onChange={(e) => setServicePrice(e.target.value)}
            required
            min="1"
            placeholder="Enter price"
          />
        </div>

       
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddService;
