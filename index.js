class Driver{
  constructor(name){
    this.name = name;
    this.startDate = new Date();
  }

  yearsExperienceFromBeginningOf(endDate){
console.log(endDate- this.startDate.getFullYear())
  }

}
