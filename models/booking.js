const DateDiff = require('date-diff');

class Booking {
    constructor(startDate, endDate){
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }

    numberOfDays(){
        const diff = new DateDiff(this.endDate, this.startDate)
        return diff.days()+1;
    }

    authorize(name, date){
        this.authorizedByName = name;
        this.date = date
        
    }

    isAuthorized(){
        if(this.authorizedByName){
            return true;
        }else {
        return false;
     }
    }

    authorizedBy(){
        if(this.authorizedByName === undefined){
            return null;
        } else {
            return this.authorizedByName
        }
    }

    authorizedOn(){
        if(this.date === undefined){
            return null;
        } else {
        return(new Date(this.date));
        }
}

    
}


module.exports = Booking