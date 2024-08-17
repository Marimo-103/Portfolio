import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className, value, children, to}) => {
  return (
    <div>
        <li>
            <Link to={to} className={`text-white sm:text-base text-xs font-Outfit sm:font-medium font-normal sm:tracking-[0.42px] transition-all duration-300 hover:text-[#FCD980] ${className}`}>
                {children}
                {value}
            </Link>
        </li>
    </div>
  )
}

export default Li