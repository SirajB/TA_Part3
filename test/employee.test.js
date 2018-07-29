const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-datetime'));

const Employee = require('../models/employee')
const Booking = require('../models/booking')

describe ('Employee', () => {


let employee = new Employee ('E123', 'joe bloggs', 'joe@bloggs.com', 25)

it('instantiates properly', () => {
    expect(employee.id).to.eql("E123");
    expect(employee.name).to.eql("Joe Bloggs");
    expect(employee.email).to.eql("joe@bloggs.com");
    expect(employee.allowance).to.eql(25);
  })

  it('gets days remaining / days booked', () => {
    expect(employee.daysRemaining()).to.eql(25);
    expect(employee.daysBooked()).to.eql(0);
  });

  it('makes a booking',() => {
    let booking1 = new Booking('2018-09-01', '2018-09-05');
    let booking2 = new Booking('2018-01-01', '2018-01-05');

    employee.makeBooking(booking1);
    employee.makeBooking(booking2);

    expect(employee.daysRemaining()).to.eql(15);
    expect(employee.daysBooked()).to.eql(10);

    expect(employee.futureBookings()).to.eql([booking1]);
    expect(employee.pastBookings()).to.eql([booking2]);
  });
})