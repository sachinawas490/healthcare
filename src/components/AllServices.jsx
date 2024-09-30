import React, { useContext } from 'react';
import { hcontext } from '../context';
import ServiceCard from './ServiceCard';



function AllServices() {
  const { data } = useContext(hcontext);

  return (
    <div className="max-w-3xl mx-auto p-6">
     
      {data.length === 0 ? (
        <div className="text-center text-gray-500">No data is present</div>
      ) : (
        <div className="flex flex-wrap justify-center ">
        
          {data.map((val, index) => (
            <ServiceCard
                  key={index}
                  index={index}
              name={val.name}
              description={val.description}
              price={val.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllServices;
