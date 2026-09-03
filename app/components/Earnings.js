import { FaArrowUpLong,FaArrowDownLong  } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";

export default function Earnings(){

    return <div className='earnings-info'>
        <div className="earning-tab">
            <h4>Capital</h4>

            <h2>$93,900.00</h2> 

            <h5 className="postive-increament"><FaArrowUpLong /> 12% vs last month</h5>  
        </div> 

        <div className="earning-tab">
            <h4>Profit 
                <a href=""><IoReload /></a>
            </h4>

            <h2>$33,900.00</h2>   

            <h5 className="postive-increament"><FaArrowUpLong /> 51% vs last month</h5>   
        </div> 

        <div className="earning-tab">
            <h4>Drawdown</h4>

            <h2>$1,358.00</h2>  

            <h5 className="negative-increament"><FaArrowDownLong  /> -13% vs last month</h5>    
        </div> 
    </div>
}