import api from "./api"

const TripsService = {
  getAllTrips() {
    return api().get("/trips");
  },
};

export default TripsService;