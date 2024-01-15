import React from 'react'
import img from '../../Assets/weather image.jpg'
export default function index() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light">
  {/* <a className="navbar-brand" href="#">Weather<i className="fa-solid fa-clouds-moon"></i></a> */}
   <div className='logo'><img src={img} className='logo-img' /></div>
</nav>
            </div>
        </div>
    </div>
    </>
  )
}
