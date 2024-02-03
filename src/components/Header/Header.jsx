import React from "react";
import Todos from "../Todos/Todos.jsx";

const Header = ({ todosCount }) => {
  const date = new Date();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = date.toLocaleDateString("en-US", { month: "long" });
  function daySuffix(day) {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

  console.log(todosCount);
  return (
    <div className="flex justify-between p-6 px-8 border-b-2 items-center">
      <div>
        <div className="flex gap-2 text-[#5b5fe7]">
          <h1 className="text-4xl font-medium ">{dayName},</h1>
          <p className="text-4xl">{daySuffix(date.getDate())}</p>
        </div>
        <p className="text-lg font-medium text-black text-opacity-50">
          {monthName}
        </p>
      </div>

      <p className="text-lg">{todosCount} tasks</p>
    </div>
  );
};

export default Header;
