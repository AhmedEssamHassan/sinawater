"use client";
import Link from "next/link";
import React from "react";
import { Spiral as Hamburger } from "hamburger-react";
const links = [
  {
    title: "رابط 1",
    path: "",
    children: [],
  },
  {
    title: "رابط 1",
    path: "",
    children: [],
  },
  {
    title: "رابط 1",
    path: "",
    children: [],
  },
  {
    title: "رابط 1",
    path: "",
    children: [],
  },
  {
    title: "رابط 1",
    path: "",
    children: [],
  },
  {
    title: "رابط 1",
    path: "",
    children: [],
  },
];

function Nav() {
  return (
    <nav className="flex justify-center items-center h-20">
      <div className="container auto flex justify-between items-center">
        <p>logo</p>
        <ul className="hidden lg:flex justify-between items-center w-3/5">
          {links.map((el) => {
            return (
              <Link
                href={el.path}
                key={el.title}
                className="font-bold text-2xl text-sky-blue px-3 py-1"
              >
                {el.title}
              </Link>
            );
          })}
        </ul>
        <div className="block lg:hidden">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
