import api from "./api"

const StationsService = {
  getAllStations() {
    return api().get("/stations");
  },
  createStations(data) {
    return api().post("/stations", data)
  }
};

export default StationsService;