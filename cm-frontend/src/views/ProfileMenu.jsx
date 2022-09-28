import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
export default function ProfileMenu() {
  return (
    <div className='row'>
      <div className='col-3 px-3 mt-3'>
        <div className="list-group w-100">
          <Link to="" className="list-group-item list-group-item-action ">  Profile</Link>
          <Link to="setting" className="list-group-item list-group-item-action">Settings</Link>
          <Link to="#" className="list-group-item list-group-item-action">Logout</Link>
        </div>
      </div>


      <Outlet />


    </div>
  )
}
