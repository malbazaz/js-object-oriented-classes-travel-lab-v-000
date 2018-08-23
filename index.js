class Driver{
    constructor(name,date){
      this.name = name;
      this.startDate = new Date(date);
    }

    yearsExperienceFromBeginningOf(endDate){
      if(endDate>this.startDate.getFullYear()){
          return endDate - this.startDate.getFullYear() -1
        }
      else{
          return this.startDate.getFullYear() - endDate
        }
    }

}

class Route{

    constructor(beginningLocation,endingLocation){
      this.beginningLocation = beginningLocation;
      this.endingLocation = endingLocation;
    }

    // blocksTravelled(){
    //   let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    //   let hor = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
    //   let ver = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical )
    //   return hor + ver;
    // }

  }
