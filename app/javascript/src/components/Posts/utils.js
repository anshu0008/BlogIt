import dayjs from "dayjs";

export const truncateDescription = text => {
  const words = text.split(" ");
  if (words.length <= 1000) return text;

  return `${words.slice(0, 1000).join(" ")} ...`;
};

export const dateFormatter = date => dayjs(date).format("DD/MM/YYYY");
