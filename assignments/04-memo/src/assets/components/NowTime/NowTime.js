export function NowTime(type, timestamp = null) {
  const date = timestamp ? new Date(timestamp) : new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = String(minutes).padStart(2, "0");

  if (type === "time") {
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  } else if (type === "datetime") {
    return `${year}년 ${month}월 ${day}일, ${ampm} ${formattedHours}:${formattedMinutes}`;
  }
}
