'use client';

import SideNav from '../components/SideNav';
import Earnings from '../components/Earnings';
import EarningsChart from '../components/EarningsChart';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Dashboard(){
    const [showSideNav, setShowSideNav] = useState(true);

    function handleSideNavToggle(new_state){
        setShowSideNav(new_state);
    }

    return <div className="dashboard">
        {showSideNav && <SideNav toggleNav={handleSideNavToggle} /> }

        {!showSideNav && <RxHamburgerMenu className='dashboard-hb' onClick={()=>setShowSideNav(true)} /> }

        <div className={!showSideNav ? 'dashboard-body2' : 'dashboard-body'}>
            <Earnings />

            <EarningsChart />
        </div>
    </div>
}