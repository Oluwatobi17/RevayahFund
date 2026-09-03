import { IoClose,IoAnalytics  } from "react-icons/io5";
// import { AiOutlineDashboard } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { VscReferences } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";

export default function SideNav({toggleNav}){
    return <div className="sidenav">
        
        <div className="side-nav-top">
            <h2>Welcome <br /> <span className="dashboard-name">Ibrahim</span></h2>
            
            <h2><IoClose className="white right" onClick={()=> toggleNav(false)} /></h2>
        </div>

        <hr />

        <div className="sidenav-a">
            <a href="/dashborad">
                <IoAnalytics />
                Earnings
            </a>

            <a href="/dashboard/deposit">
                <RiLuggageDepositLine />
                Deposit
            </a>

            <a href="/dashboard/withdraw">
                <BiMoneyWithdraw />
                Withdraw
            </a>

            <a href="/dashboard/profile">
                <CgProfile />
                Profile
            </a>

            <a href="/dashboard/referal">
                <VscReferences />
                Referal
            </a>

            <a href="/dashboard/logout">
                <IoIosLogOut />
                Logout
            </a>
        </div>
    </div>
}