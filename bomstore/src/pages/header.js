import React from 'react'
import { NavLink , Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className='header-top py-1'>
        <div className='container-xll'>
          <div className='row'>

            <div className='col-6'>
              <p className='text-white mb-0'>
              Miễn phí vận chuyển với hóa đơn trên 400,000 VND
              </p>
            </div>

            <div className='col-6'>
              <p className='text-white mb-0'>
                Liên hệ: <a href='tel: +84 385994124'>+84 385994124</a>
              </p>
            </div>

          </div>
        </div>
      </header>
      

      <header>

      </header>
    </>
  )
}

export default Header