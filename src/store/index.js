import { createStore } from 'redux'

const INITIAL_STATE = {
  amountVaccineByArea: [],
  vaccinationByDate: [],
  vaccinationStatistics: []
}

function vaccineReducer(state= INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_VACCINE_BY_AREA':
      return { ...state, amountVaccineByArea: action.amountVaccineByArea }
    
    case 'FETCH_VACCINATION_BY_DATE':
      return { ...state, vaccinationByDate: action.vaccinationByDate }
    
    case 'FETCH_VACCINATION_STATISTICS':
      return { ...state, vaccinationStatistics: action.vaccinationStatistics }
  
    default:
      return state;
  }
}

const store = createStore(vaccineReducer)

export default store