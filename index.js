class Driver{
  constructor(name){
    this.name = name;
    this.startDate = new Date();
  }

  yearsExperienceFromBeginningOf(endDate){
return endDate - this.startDate.getFullYear()
  }

}
