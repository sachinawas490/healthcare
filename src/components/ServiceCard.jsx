import React, { useContext } from 'react'
import { hcontext } from '../context'
import { useNavigate } from 'react-router-dom';
function ServiceCard({ index, price, name, description }) {
    const { setindex,data } = useContext(hcontext);
    const navigate = useNavigate();
    function handleclick() {
        setindex(index);
        console.log(index);
        navigate('/update')
        
     }
  return (
     <div onClick={handleclick} className="card bg-base-100  shadow-xl border-2 max-w-[90%] min-w-[90%] md:max-w-[70%] md:min-w-[70%] border-pink-500 hover:shadow-lg hover:shadow-teal-500 mx-5 my-5">
  <div className="card-body">
            <h2 className="card-title my-1 text-[30px] text-blue-500">{ name}</h2>
            <p>{ description}</p>
    <div className="card-actions justify-end">
                <button className="btn btn-primary">₹ { price} </button>
    </div>
  </div>
</div>
  )
}

export default ServiceCard
