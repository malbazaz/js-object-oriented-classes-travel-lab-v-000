class Driver{
  constructor(name){
    this.name = name;
    this.startDate = new Date();
  }

  yearsExperienceFromBeginningOf(year){
console.log(year - this.startDate.getFullYear())
  }

}
