import React from "react";

import { dateFormatter, truncateDescription } from "./utils";

const Card = ({ title, description, created_at }) => {
  const formattedDate = dateFormatter(created_at);

  return (
    <div className="space-y-1 border-b py-3 shadow-sm">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="whitespace-normal break-words text-sm">
        {truncateDescription(description)}
      </p>
      <p className="text-xs text-bb-gray-600">{formattedDate}</p>
    </div>
  );
};

export default Card;
