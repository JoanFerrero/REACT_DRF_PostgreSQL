import api from "./api"

const IncidentsService = {
  getIncidentTrain() {
    return api().get('incidenttget');
  },
  postIncidentTrain(data) {
    return api().post('incidentt', data);
  },
  getIncidentChair() {
    return api().get('incidentscget');
  },
  postIncidentChair(data) {
    return api().post('incidentsc', data);
  },
};

export default IncidentsService;