import api from "./api"

const TripsService = {
  getAllTrips() {
    return api().get("/trips");
  },
  getOneTrip(id) {
    return api().get("/trips/" + id);
  },
};

export default TripsService;