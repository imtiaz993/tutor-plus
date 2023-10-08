export const allFieldsEmpty = (qualifiedSucjects:object) => {
    return Object.values(qualifiedSucjects).some((value) => value === '')
}

export const dateFormatter = (date:string, time:string) => {
    
  const [year, month, day]:any = date.split('-');
  const [hours, minutes, seconds]:any = time.split(':');

  const formattedDate = new Date(year, month - 1, day, hours, minutes, seconds);

  const formattedDateTime = formattedDate
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
    console.log(formattedDateTime)
    return formattedDateTime
}

export const  getLastDate= (date:string) => {
  const currentDate = new Date(date); // Parse the input date
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), lastDay);
  return lastDate.toISOString().slice(0, 19).replace('T', ' ')
}
