//Unused in this project
import * as types from "./actionTypes";
import sessionApi from '../Auth/sessionApi';

var usertest = { username: "@david" };
var tokentest = "token00";

export function loginSuccess() {
  console.log('logeado')
  return {type: types.LOG_IN_SUCCESS}
}

export function logoutUser(){
	sessionStorage.removeItem('jwt');
	sessionStorage.removeItem('user');
	return {type: types.LOG_OUT}
}

export function loginUser(credentials) {
    //CONECT WITH API | send request with credentials | handle errors
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      let user = {
        name: response.name /*,
        lastname: response.lastname,
        username: response.username,
        phone: response.phone,
        email: response.email*/
      }
      sessionStorage.setItem('jwt', response.token);
      sessionStorage.setItem('client', response.client);
      sessionStorage.setItem('user',JSON.stringify(user));

      if (response.token==undefined){
        dispatch(logoutUser());
        /*swal(
          'usuario o contraseña invalidos',
          'intentalo de nuevo',
          'warning'
        )*/
        alert('invalidos')
      }else{
        dispatch(loginSuccess());
        /*swal(
    			"Ha ingresado correctamente",
    			"¡Bienvenido!",
    			"success"
        ).then(value =>
            window.location.reload())*/
            //    window.location.reload()
      }
    }).catch(error => {
      throw(error);
    });
  };
}
