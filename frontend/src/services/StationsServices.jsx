import api from "./api"

const StationsService = {
  getAllStations() {
    return api().get("/stations");
  },
  createStations(data) {
    return api().post("/stations", data);
  },
  getOneStation(slug) {
    return api().get("/stations/" + slug);
  },
  updateOneStation(slug, data) {
    console.log(data)
    return api().put("/stations/" + slug, data);
  }
};

export default StationsService;