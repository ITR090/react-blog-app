import React from 'react'
import { MainNavTop } from '../UI/MainNavTop/MainNavTop'
import { Outlet } from 'react-router-dom'
const RouteLayoutTop = () => {
  return (
    <>
    <MainNavTop/>
    <Outlet/>
    </>
  )
}

export default RouteLayoutTop