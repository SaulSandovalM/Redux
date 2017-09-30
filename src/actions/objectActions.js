export function loadPeopleSuccess(people){
  return {type: "LOAD_PEOPLE_SUCCESS", people };
}
//este es un thunk porque es asincrono
export function loadPeople(){
  return function(dispatch){
    return fetch("https://swapi.co/api/people/")
    .then(r=>r.json())
    .then(data=>{
      return dispatch(loadPeopleSuccess(data.results));
    })
    .catch(e=>{throw(e)});
  }
}
