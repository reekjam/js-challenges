const expect = require('chai').expect;
const TestGreatCircleDistance = require('./great-circle-distance');

describe('GreatCircleDistance', () => {
  const customers = [
      {latitude: 53.3381985, user_id: 1, name: "Jimmy McNulty", longitude: -6.2592576},
      {latitude: 101.986375, user_id: 2, name: "Stringer Bell", longitude: -1.043701},
      {latitude: 102.986375, user_id: 3, name: "Bunk Moreland", longitude: -2.043701},
      {latitude: 52.986375, user_id: 4, name: "Omar Little", longitude: -6.2592577},
  ];
  const c = new TestGreatCircleDistance(customers, 100);

  describe('degreesToRadians', () => {
    it('converts degrees to radians', () => {
      const radiansRounded = Math.round(c.degreesToRadians(360) * 100) / 100;

      expect(radiansRounded).equal(6.28);
    });
  });

  describe('calcDistance', () => {
    it('calculates distance between two points', () => {
      const a = {latitude: 90, longitude: 5};
      const b = {latitude: 105, longitude: 5};
      const distance = Math.round(c.calcDistance(a.latitude, a.longitude, b.latitude, b.longitude));

      expect(distance).equal(1668);
    });
  });

  describe('withinDistance', () => {
    it('returns customers within specified distance', () => {
      expect(c.withinDistance().length).equal(2);
    });
  });

  describe('sortByUserId', () => {
    it('sorts customers within distance by user id', () => {
      const customerList = c.sortByUserId();

      expect(customerList[0]).equal('1 - Jimmy McNulty');
      expect(customerList[1]).equal('4 - Omar Little');
    });
  });
});

