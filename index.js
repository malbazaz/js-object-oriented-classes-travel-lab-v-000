class Driver{
  constructor(name,date){
    this.name = name;
    this.startDate = new Date(date);
  }

yearsExperienceFromBeginningOf(endDate){
  debugger;
  if(endDate>this.startDate.getFullYear()){
return endDate - this.startDate.getFullYear() -1
}
else{
return this.startDate.getFullYear() - endDate
  }
  }

}
