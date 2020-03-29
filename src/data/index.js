export const dataRank = [
  {
           idPatient: "343",
           risk: 78.5
      },
      {
          idPatient: "d@mail",
          risk: 69
      },
  {
          idPatient: "3",
          risk: 55.5
      },
      {
          idPatient: "2",
          risk: 23.5
      },
      {
          idPatient: "1",
          risk: 22.5
      },
      {
          idPatient: "456",
          risk: 13.5
      },
      {
          idPatient: "n@mail",
          risk: 5
      },
]

export const dataStatistics = {
    high:134,
    mid:567,
    low:1234
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
