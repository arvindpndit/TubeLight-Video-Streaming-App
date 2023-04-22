import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const toggle = useSelector((store) => store.sidebar.toggle);
  //early return
  if (!toggle) return null;
  return (
    <div className="w-2/12 bg-gray-300">
      <ul className="mb-3">
        <li className="font-semibold">Subsciption</li>
        <li>Hello</li>
        <li>misusc</li>
        <li>kdjfls</li>
      </ul>
      <ul className="mb-3">
        <li className="font-semibold">Subsciption</li>
        <li>Hello</li>
        <li>misusc</li>
        <li>kdjfls</li>
      </ul>
      <ul className="mb-3">
        <li className="font-semibold">Subsciption</li>
        <li>Hello</li>
        <li>misusc</li>
        <li>kdjfls</li>
      </ul>
      <ul className="mb-3">
        <li className="font-semibold">Subsciption</li>
        <li>Hello</li>
        <li>misusc</li>
        <li>kdjfls</li>
      </ul>
      <ul className="mb-3">
        <li className="font-semibold">Subsciption</li>
        <li>Hello</li>
        <li>misusc</li>
        <li>kdjfls</li>
      </ul>
    </div>
  );
};

export default Sidebar;
