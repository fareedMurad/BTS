/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
// components

import IndexDropdown from 'components/Dropdowns/IndexDropdown.js';

export default function Navbar(props) {
  const loc = props.loc;
  const config = props.config;
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              to='/'
              className='text-blueGray-700 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap'
            >
              <div className='inline-block logo-box'>
                <img
                  alt='Logo'
                  style={{ height: 15, width: 15 }}
                  className=' border-none'
                  src={require('assets/img/logo.jpg').default}
                />
              </div>
              Bedside Terminal Solution | BITS Arabia 
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-end' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <a
                  className='lg:text-gray lg:hover:text-red-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='#features'
                >
                  {loc.nav.features}
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='lg:text-gray lg:hover:text-red-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='#screenshots'
                >
                  {loc.nav.screenshots}
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-gray lg:hover:text-red-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='#contact-us'
                >
                  {loc.nav.contact_us}
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-gray lg:hover:text-red-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href={config.login_url}
                >
                  {loc.nav.login}
                </a>
              </li>
              <li className='flex items-center'>
                <button
                  className='bg-red-500 text-white active:bg-trf-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                  type='button'
                  onClick={props.changeLanguage}
                >
                  {loc.sw_language}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
