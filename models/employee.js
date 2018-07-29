class Employee {
    constructor(id, name, email, allowance){
        this.id = id;
        this.name = this.titleCase(name);
        this.email = email;
        this.allowance = allowance;
        this.bookings = [];
        this.bookingDates = [];
    }

    titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      }

    daysRemaining(){
        if(this.bookings.length > 0){
            const reducer = (accumulator, currentValue) => accumulator + currentValue
            return this.allowance - (this.bookings.reduce(reducer));
        } else {
            return this.allowance;
        }
    }
    
    daysBooked(){
        return (this.allowance - this.daysRemaining());
    }

    makeBooking(booking){
        this.bookings.push(booking.numberOfDays())
        this.bookingDates.push(booking)
    }

    futureBookings(){
      this.futureArray = []
      for(let i = 0; i< this.bookingDates.length; i++){
        if(this.bookingDates[i].startDate > new Date()){   
           this.futureArray.push(this.bookingDates[i])
        }
      }
      return this.futureArray
    }

    pastBookings(){
        this.pastArray = []
        for(let i = 0; i< this.bookingDates.length; i++){
            if(this.bookingDates[i].endDate < new Date()){
                this.pastArray.push(this.bookingDates[i])
            }
        }
        return this.pastArray
    }
}

module.exports = Employee