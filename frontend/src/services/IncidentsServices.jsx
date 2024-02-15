import api from "./api"

const IncidentsService = {
  getIncidents() {
    return api().get('alltrainincidents');
  },
};

export default IncidentsService;