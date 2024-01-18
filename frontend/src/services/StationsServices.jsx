import api from "./api"

const StationsService = {
  getAllStations() {
    return api().get("/stations");
  },
};

export default StationsService;