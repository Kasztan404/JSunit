//function give Age

function getAge(year, month, day){
const birthDate = new Date(year,month -1, day);
const today = new Date();

const age = today.getFullYear() - birthDate.getFullYear();
birthDate.setFullYear(today.getFullYear());

return (today < birthDate ? age -1 : age); 

}