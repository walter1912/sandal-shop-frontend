import moment from "moment";
export function formatTimestamp({
  nanoseconds,
  seconds,
}: {
  nanoseconds: number;
  seconds: number;
}) {
  // Convert nanoseconds to milliseconds
  const miliseconds = Math.floor(nanoseconds / 1e6);

  // Create a moment object using the timestamp in milliseconds
  const momentObj = moment(miliseconds);

  // Format the moment object to "DD-MM, HH:mm:ss"
  const formattedDateNanoseconds = momentObj.format("DD-MM, HH:mm:ss");

  console.log("Formatted Date (Nanoseconds):", formattedDateNanoseconds);

  // Alternatively, if you already have the timestamp in seconds
  const momentObjFromSeconds = moment.unix(seconds);

  // Format the moment object to "DD-MM, HH:mm:ss"
  const formattedDateSeconds = momentObjFromSeconds.format("DD-MM, HH:mm:ss");
  return formattedDateSeconds;
}
