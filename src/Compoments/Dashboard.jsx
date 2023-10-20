import React from "react";
import Sun from "../Icons/Sun.svg";
import SearchIcon from "../Icons/Search.svg";
import Notif from "../Icons/Notifications active.svg";
import Grid from "../Icons/Grid 2.png";
import Moon from "../Icons/Moon.png";
import Collection from "../Icons/collection.svg";
import Calender from "../Icons/calendar.svg";
import User from "../Icons/users.svg";
import Chart from "../Icons/chart.svg";
import Circle from "../Icons/Circle.svg";
import Arrow from "../Icons/right.svg";
import Cart from "../Icons/cart.svg";
import Graph from "../Icons/graph.svg";
import Setting from "../Icons/setting.svg";
import Logout from "../Icons/logout.svg";
import {FaBars , FaTimes} from 'react-icons/fa'


export default function Dashboard() {
  return (
    <div className="bg-blue-50 p-2 flex md:justify-center  md:min-h-screen">
      <div className=" ">
        {/* Top navbar */}

        <div className="flex bg-white  pt-2 pb-2 mr-2 md:w-auto w-2/5 ">
          {/* sun icon */}
          <div className="bg-white flex w-[190px]">
            <img src={Sun} alt="" className="w-5 ml-2 " />
            <p className="font-inter text-lg  ml-6">Transade</p>
          </div>

          {/* search bar */}

          <div className="md:flex ml-72 bg-blue-50 hidden">
            <div className="relative">
              <input
                type="text"
                className="border rounded-lg py-1 px-3 w-[500px] focus:outline-none focus:ring focus:border-blue-300 pr-10"
                placeholder="Search..."
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <img src={SearchIcon} alt="Search Icon" className="w-5" />
              </div>
            </div>
          </div>

          {/* Remaning icon */}

          <div className=" bg-blue-50 md:ml-32 mt-1">
            <img src={Notif} alt="" className="w-5 " />
          </div>
          <div className=" bg-blue-50 ml-10 mt-1">
            <img src={Grid} alt="" className="w-5 " />
          </div>
          <div className=" bg-blue-50 ml-10 mt-1">
            <img src={Moon} alt="" className="w-5 " />
          </div>
          <div className=" bg-blue-50 ml-10 mt-1">
            <img src={Circle} alt="" className="w-5 " />
          </div>
        </div>

        {/* Top navbar end */}

        {/* Main part of page */}

        <div className="grid  md:grid-cols-12 md:gap-10 mt-5">
          {/* Side nav bar start */}

          <div className="col-span-2 bg-white">
            <div className="">
              {/* Dashboard */}

              <div className="flex p-4">
                <img src={Collection} alt="" className="w-5" />
                <p className="ml-2">Dashboard</p>
                <img src={Arrow} alt="" className="w-5 ml-2 " />
              </div>

              {/* Events */}

              <div className="flex p-4">
                <img src={Calender} alt="" className="w-5" />
                <p className="ml-2">Events</p>
                <img src={Arrow} alt="" className="w-5 ml-10 " />
              </div>

              {/* User */}
              <div className="flex p-4">
                <img src={User} alt="" className="w-5" />
                <p className="ml-2">Users</p>
                <img src={Arrow} alt="" className="w-5 ml-11 " />
              </div>

              {/* Static */}
              <div className="flex p-4">
                <img src={Chart} alt="" className="w-5" />
                <p className="ml-2">Statistics</p>
                <img src={Arrow} alt="" className="w-5 ml-5 " />
              </div>
              
               {/* Setting */}
              <div className="flex p-4 md:mt-52">
                <img src={Setting} alt="" className="w-5" />
                <p className="ml-2">Setting</p>
                <img src={Arrow} alt="" className="w-5 ml-8 " />
              </div>

               {/* Singout */}
               <div className="flex p-4">
                <img src={Logout} alt="" className="w-5" />
                <p className="ml-2">Sing Out</p>
                <img src={Arrow} alt="" className="w-5 ml-5 " />
              </div>

            </div>
          </div>
          {/* Side nav bar end */}

          {/* Right side of page */}
          <div className="col-span-10 ">
            <div className="grid md:grid-cols-9 md:gap-4 md:mt-0 mt-4 gap-2">
              {/* Transactions */}
              <div className="col-span-3 p-2 bg-white md:w-auto w-2/5">
                <div className="flex">
                  <div className=" bg-blue-50 rounded-full pl-1 pt-2">
                    <img src={Cart} alt="" className=" " />
                  </div>

                  <div className="ml-5 ">
                    <p className="font-semibold">Transactions Name</p>
                    <p className="text-sm font-light">Yestarday 12 : 49 PM</p>
                  </div>

                  <div className="ml-28 mt-2">
                    <p>$ 4.30</p>
                  </div>
                </div>
              </div>
              {/* Transactions */}
              <div className="col-span-3 p-2 bg-white md:w-auto w-2/5">
                <div className="flex">
                  <div className=" bg-blue-50 rounded-full pl-1 pt-2">
                    <img src={Cart} alt="" className=" " />
                  </div>

                  <div className="ml-5 ">
                    <p className="font-semibold">Transactions Name</p>
                    <p className="text-sm font-light">Yestarday 12 : 49 PM</p>
                  </div>

                  <div className="ml-28 mt-2">
                    <p>$ 4.30</p>
                  </div>
                </div>
              </div>
              {/* Transactions */}
              <div className="col-span-3 p-2 bg-white md:w-auto w-2/5">
                <div className="flex">
                  <div className=" bg-blue-50 rounded-full pl-1 pt-2">
                    <img src={Cart} alt="" className=" " />
                  </div>

                  <div className="ml-5 ">
                    <p className="font-semibold">Transactions Name</p>
                    <p className="text-sm font-light">Yestarday 12 : 49 PM</p>
                  </div>

                  <div className="ml-28 mt-2">
                    <p>$ 4.30</p>
                  </div>
                </div>
              </div>

              {/* Graphical part */}
              <div className="col-span-3 p-2 bg-white md:w-auto w-2/5">
              <div className="flex ">
                <div>
                  <p className="text-gray-400 text-sm">100</p>
                  <p className="text-gray-400 text-sm">90</p>
                  <p className="text-gray-400 text-sm">80</p>
                  <p className="text-gray-400 text-sm">70</p>
                  <p className="text-gray-400 text-sm">60</p>
                  <p className="text-gray-400 text-sm">50</p>
                </div>
                
                <img src={Graph} alt="" className="ml-2 " />
              </div>
            </div>
              {/* Graphical part end */}

              <div className="col-span-3 p-2 bg-white md:w-auto w-2/5">
                <p className="text-[#545F71] font-bold text-2xl">$ 1893.44</p>
                <p className="text-gray-400 text-sm">Dollers</p>
                <div className="flex mt-5">
                  <button className="bg-[#EEF1F4] w-28 h-10 rounded-md">Transfer</button>
                  <button className="bg-[#545F71] w-32 text-white rounded-md ml-4">Add Money +</button>
                </div>
              </div>
              <div className="col-span-3 p-2 bg-white md:w-auto w-2/5">
                <p className="text-[#545F71] font-bold text-2xl">$ 1893.44</p>
                <p className="text-gray-400 text-sm">Dollers</p>
                <div className="flex mt-5">
                  <button className="bg-[#EEF1F4] w-28 h-10 rounded-md">Transfer</button>
                  <button className="bg-[#545F71] w-32 text-white rounded-md ml-4">Add Money +</button>
                </div>
              </div>
            </div>
              
                {/* Table Layout */}
                <div className="grid md:grid-cols-3 bg-white md:w-auto  w-2/5 overflow-x-auto mt-5">
                <div className="col-span-3">
                 <table className=" border-collapse border border-slate-500">
                  <thead>
                    <tr>
                      <th className="border border-slate-600 pl-2 pb-6 tracking-wide">#</th>
                      <th className="border border-slate-600 pl-2 pr-48 tracking-wide ">Name</th>
                      <th className="border border-slate-600 pl-2 pr-20 tracking-wide">UserID</th>
                      <th className="border border-slate-600 pl-2 pr-14 tracking-wide">Date of Birth</th>
                      <th className="border border-slate-600 pl-2 pr-48 tracking-wide">Job Title</th>
                      <th className="border border-slate-600 pl-2 pr-48 tracking-wide">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-1 pb-3 whitespace-nowrap">1.</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Darlene Robertson</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">2798</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">02/07/1971</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Dog Trainer</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap"><button className="bg-[#545F71] w-20 text-white rounded-md ">Active</button></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-1 pb-3 whitespace-nowrap">2.</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Ronald Richards</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">4600</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">28/03/1968</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Marketing Coordinato</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap"><button className="bg-[#EEF1F4] w-20 text-black rounded-md ">Inactive</button></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-1 pb-3 whitespace-nowrap">3.</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Jerome Bel</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">4846</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">12/08/1994</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">President of Sales</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap"><button className="bg-[#545F71] w-20 text-white rounded-md ">Active</button></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-1 pb-3 whitespace-nowrap">4.</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Robert Fox</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">9151</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">02/01/1980</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Medical Assistant</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap"><button className="bg-[#545F71] w-20 text-white rounded-md ">Active</button></td>
                    </tr> 
                  </tbody>
                   
                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-1 pb-3 whitespace-nowrap">5.</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Bessie Cooper</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">6025</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">27/11/1987</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Dog Trainer</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap"><button className="bg-[#FFFFFF] w-20 text-black rounded-md ">Disable</button></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-1 pb-3 whitespace-nowrap">6.</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Kathryn Murphy</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">6065</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">22/08/1969</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Web Designe</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap"><button className="bg-[#EEF1F4] w-20 text-black rounded-md ">Inactive</button></td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-1 pb-3 whitespace-nowrap">7.</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Courtney Henry</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">9261</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">20/06/1988</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap">Nursing Assistant</td>
                      <td className="border border-slate-700 pl-4 whitespace-nowrap"><button className="bg-[#545F71] w-20 text-white rounded-md ">Active</button></td>
                    </tr>
                  </tbody>
                  </table>
                </div>
               </div>

          </div>
        </div>
      </div>
    </div>
  );
}
