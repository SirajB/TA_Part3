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

    authorize(){
        return false
    }

    isAuthorized(){
        if(!this.authorize()){
            return false;
        }
        return true;
    }

    authorizedBy(){
        if(!this.isAuthorized()){
            return null;
        }
    }

    authorizedOn(){
        if(!this.isAuthorized()){
            return null;
        }
        return(new Date());
    }

    
}


module.exports = Booking