class Driver{
  constructor(name){
    this.name = name;
    this.startDate = new Date();
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }

}
