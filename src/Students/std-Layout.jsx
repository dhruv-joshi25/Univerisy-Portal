import React from 'react'
import Sidebar from './SideBar'
import { Outlet } from 'react-router-dom'

export default function std_Layout() {
  return (
    <>
    <Sidebar />
    <Outlet />
    </>
  )
}
