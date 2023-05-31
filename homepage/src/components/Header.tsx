import React from "react";

export default function Header() {
  return (
    <div className="p-5 bg-gray-500 flex justify-between items-center">
      <nav className="text-md text-white">
        <a href="#">App Logo</a>
      </nav>
      <nav>
        <ul className="flex gap-2 text-sm text-white">
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>
            <a href="http://localhost:3001/">Account</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
