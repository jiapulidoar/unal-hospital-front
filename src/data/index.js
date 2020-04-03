export const dataRank = [
  {
         idPatient: "343",
         risk: 78.5,
         phoneNumber: 3144366789,
         name: "Jhon Doe",
         age: 55,
         gender: "male",
         email: "example@example.com",
         userType: "doctor",
         geoLocation: {
           "latitude": 38.926639,
           "longitude": -77.033811
         },
         date: "3/30/2020, 12:47:02 PM"
      },
      {
          idPatient: "d@mail",
          risk: 69,
          phoneNumber: 3144366789,
          name: "Jhon Doe",
          age: 55,
          gender: "male",
          email: "example@example.com",
          userType: "doctor",
          geoLocation: {
            "latitude": 38.926639,
            "longitude": -77.033811
          },
          date: "3/30/2020, 12:47:02 PM"
      },
      {
          idPatient: "3",
          risk: 55.5,
          phoneNumber: 3144366789,
          name: "Marie Curie",
          age: 55,
          gender: "female",
          email: "example@example.com",
          userType: "doctor",
          geoLocation: {
            "latitude": 38.926639,
            "longitude": -77.033811
          },
          date: "3/30/2020, 12:47:02 PM"
      },
      {
          idPatient: "2",
          risk: 23.5,
          phoneNumber: 3144366789,
          name: "Jhon Doe",
          age: 55,
          gender: "male",
          email: "example@example.com",
          userType: "doctor",
          geoLocation: {
            "latitude": 38.926639,
            "longitude": -77.033811
          },
          date: "3/30/2020, 12:47:02 PM"
      },
      {
          idPatient: "1",
          risk: 22.5,
          phoneNumber: 3144366789,
          name: "Ada Lovelace",
          age: 55,
          gender: "female",
          email: "example@example.com",
          userType: "doctor",
          geoLocation: {
            "latitude": 38.926639,
            "longitude": -77.033811
          },
          date: "3/30/2020, 12:47:02 PM"
      },
      {
          idPatient: "456",
          risk: 13.5,
          phoneNumber: 3144366789,
          name: "Jhon Doe",
          age: 55,
          gender: "male",
          email: "example@example.com",
          userType: "doctor",
          geoLocation: {
            "latitude": 38.926639,
            "longitude": -77.033811
          },
          date: "3/30/2020, 12:47:02 PM"
      },
      {
          idPatient: "n@mail",
          risk: 5,
          phoneNumber: 3144366789,
          name: "Jhon Doe",
          age: 55,
          gender: "male",
          email: "example@example.com",
          userType: "doctor",
          geoLocation: {
            "latitude": 38.926639,
            "longitude": -77.033811
          },
          date: "3/30/2020, 12:47:02 PM"
      },
]


export const dataStatistics = {
    totals: {
      highRisk:{
        numPatients:134,
        code: "red"
      },
      midRisk:{
        numPatients:134,
        code: "yellow"
      },
      lowRisk:{
        numPatients:134,
        code: "green"
      }
  }
}


export const patientData = {
  id: "p1234",
  rank: 100,
  risk: 4.0,
  info:{
    name: "aaaaaa bbbbb", //null if not
    lastName: "Cccccccc Dddddddd", //null if not
    age: 25,
    sex: "Male"
  },
  contact: { // I guess one of these should be mandatory when registering
    email: "test@test.com",
    phone: "3333333333"
  },
  location:{
    latLng: "sdf",
    address: "Cll. 20 #4-20G",
    city: "Bogota",
    district: "Antonio Nariño",
    neighborhood: "Restrepo"
  },
  questions: [
    {question: "tiene coronavirus?", answer:"Vielleicht"},
    {question: "es esto una pregunta?", answer:"Ja"},
    {question: "io no se :v?", answer:"Ahhhhhh"}
  ]
  //answers:{}
}
