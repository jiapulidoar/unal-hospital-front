//import axios from 'axios';
//import * as consts from '../../consts';


class SessionApi {
  static login(credentials) {
    var posti = new Promise(function(resolve,reject){
      if(credentials.email==='admin@mail' && credentials.password==='admin' ){
        resolve ({name:credentials.email, client:'mail.com', token:"asdfw4342rweqwe"})
      }else {
          resolve ({name:undefined, client:'mail.com', token:undefined})
      }

    });
    return posti.then(res => {
            return res;
          })
          .catch(err => {return err})
  }
}

export default SessionApi;
