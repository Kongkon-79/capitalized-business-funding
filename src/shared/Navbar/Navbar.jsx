import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="container">
      <div className="flex items-center justify-between py-[16px] px-[24px] bg-white rounded-[24px] border border-white shadow-[0px_-4px_12px_0px_rgba(61,110,234,0.15),0px_4px_12px_0px_rgba(1,32,69,0.15)]">
        {/* logo  */}
        <div>
          <NavLink to="/">
            <img
              src="/assets/images/nav_logo.png"
              alt="nav logo"
              width={193}
              height={44}
            />
          </NavLink>
        </div>
        {/* menu  */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-[32px]">
            <NavLink to="/">
              <li className="text-base font-normal leading-[28px] text-secondary-200 hover:text-secondary-100">
                Home
              </li>
            </NavLink>
            <NavLink to="/demo-data-fetch">
              <li className="text-base font-normal leading-[28px] text-secondary-200 hover:text-secondary-100">
                How it work
              </li>
            </NavLink>

            <li className="text-base font-normal leading-[28px] text-secondary-200 hover:text-secondary-100">
              Why Capitalized?
            </li>
            <li className="text-base font-normal leading-[28px] text-secondary-200 hover:text-secondary-100">
              Become a partner
            </li>
          </ul>
        </div>
        {/* button  */}
        <div className="hidden md:block">
          <button className="text-xs font-semibold leading-[28px] text-primary py-[8px] px-[20px] rounded-[8px] border border-primary bg-white/15 shadow-md shadow-[#587DFF59]">
            Admin Panel
          </button>
        </div>

        {/* small device  */}
        <div className="block md:hidden">
          {isOpen ? (
            <TfiMenu
              className="w-[24px] h-[24px] text-primary"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <RxCross2
              className="w-[24px] h-[24px] text-primary"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      {/* menu part  */}
      {!isOpen && (
        <ul
          className={`bg-white  flex flex-col items-center gap-[32px] fixed -top-1 h-[50%] z-50 ${
            !isOpen ? "w-[75%] right-0" : "w-full -right-[100%]"
          }`}
        >
          <div className="w-full flex items-center justify-start pl-2 pt-3">
            <RxCross2
              className="w-[24px] h-[24px] text-primary"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          <NavLink to="/">
            <li className="text-base font-medium leading-[28px] text-secondary-200 hover:text-secondary-100">
              Home
            </li>
          </NavLink>
          <li className="text-base font-medium leading-[28px] text-secondary-200 hover:text-secondary-100">
            How it work
          </li>
          <li className="text-base font-medium leading-[28px] text-secondary-200 hover:text-secondary-100">
            Why Capitalized?
          </li>
          <li className="text-base font-medium leading-[28px] text-secondary-200 hover:text-secondary-100">
            Become a partner
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
