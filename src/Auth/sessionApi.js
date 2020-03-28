//import axios from 'axios';
//import * as consts from '../../consts';


class SessionApi {
  static login(credentials) {
    var posti = new Promise(function(resolve,reject){
        resolve ({name:'nombre',client:'mail.com', token:"asdfw4342rweqwe"})
    });
    return posti.then(res => {
            return res;
          })
          .catch(err => {return err})
  }
}

export default SessionApi;
