const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-datetime'));

const Booking = require ('../models/booking');

describe('Booking', () => {
    let booking = new Booking(new Date('2018-09-01'), new Date('2018-09-05'));

    it ('instansiates correctly and expect booking.numberOfDays to equal 5', () => {
        expect(booking.startDate).to.equalDate(new Date('2018-09-01'));
        expect(booking.endDate).to.equalDate(new Date('2018-09-05'));
        expect(booking.numberOfDays()).to.eql(5);
    });

    it('shows authorisation', () => {
        expect(booking.isAuthorized()).to.eql(false);
        expect(booking.authorizedBy()).to.eql(null);
        expect(booking.authorizedOn()).to.eql(null);
    });

    it ('Allows Mr Boss Man to authorise', () => {
        expect(booking.authorize('Mr Boss Man')).to.eql();
        expect(booking.isAuthorized()).to.eql(true);
        expect(booking.authorizedBy()).to.eql('Mr Boss Man');
        expect(booking.authorizedOn()).to.eql(null);
    });
    
    it ('Allows Mr Boss Man to authorise on a certain date', () => {
        expect(booking.authorize('Mr Boss Man', new Date('2018-07-01'))).to.eql();
        expect(booking.isAuthorized()).to.eql(true);
        expect(booking.authorizedBy()).to.eql('Mr Boss Man');
        expect(booking.authorizedOn()).to.eql(new Date('2018-07-01'));
    });


});

