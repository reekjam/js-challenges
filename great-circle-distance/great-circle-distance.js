class GreatCircleDistance {
  constructor(customers, distance) {
    this.customers = customers;
    this.distance = distance;
    this.radius = 6371
    this.homeLat = 53.3381985;
    this.homeLon = -6.2592576;
  };

  degreesToRadians(deg) {
    return (deg/180) * Math.PI;
  };

  calcDistance(lat1, lon1, lat2, lon2) {
    const [lat1R, lon1R, lat2R, lon2R] = Array.from(arguments).map(v => this.degreesToRadians(v));

    return (
      2 * this.radius * Math.asin(
        Math.sqrt(

          Math.pow(
            Math.sin((lat2R - lat1R) / 2), 2
          ) +

          Math.cos(lat1R) *

          Math.cos(lat2R) *

          Math.pow(
            Math.sin((lon2R - lon1R) / 2), 2
          )

        )
      )
    );
  };

  withinDistance() {
    return this.customers.filter(c => {
      const distance = this.calcDistance(c.latitude, c.longitude, this.homeLat, this.homeLon);
      return distance <= this.distance;
    });
  };

  sortByUserId() {
    return this.withinDistance()
      .sort((a, b) => a.user_id - b.user_id)
      .map(c => {
        return `${c.user_id} - ${c.name}`;
      });
  };
};

module.exports = GreatCircleDistance;
