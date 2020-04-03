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

export const patient = {
  phoneNumber: "3144366789",
  rank: "high",
  name: "Jhon Doe",
  age: 55,
  gender: "male",
  email: "example@example.com",
  password: "somePassword",
  userType: "patient",
  geoLocation: {
    latitude: 38.926639,
    longitude: -77.033811
  },
  location : "La Gaitana, Suba",
  date: "3/30/2020, 12:47:02 PM",
  history:[
    {
      rank:"high",
      date:"3/30/2020, 12:47:02 PM",
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque nibh, vehicula id convallis vel, bibendum sed ante. Donec eget tellus non nunc bibendum bibendum. Morbi sollicitudin sollicitudin est, eget dapibus eros hendrerit nec. Vestibulum mattis ultricies malesuada. Quisque porttitor eu neque vitae viverra. Donec eget dui erat. Ut dictum non libero vitae scelerisque. Donec sit amet turpis dolor. Sed consectetur neque nec arcu rutrum ornare. Aenean eu elit iaculis, pharetra enim faucibus, rhoncus ligula. Vestibulum congue diam id massa ultricies, nec mollis dolor pretium. Fusce consequat pharetra nibh nec auctor. "
    },
    {
      rank:"medium",
      date:"3/30/2020, 12:47:02 PM",
      info: "Mauris a massa mi. Pellentesque consectetur orci eget ornare rutrum. Praesent at iaculis magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum sed sapien vitae nisl ultrices aliquet. In aliquam purus nec auctor tincidunt. Proin venenatis erat et justo egestas, vel aliquam enim cursus. "
    },
    {
      rank:"medium",
      date:"3/30/2020, 12:47:02 PM",
      info: "Ut ut rhoncus leo. Nunc congue consectetur nibh, ac feugiat elit varius eu. Aenean nec nulla aliquam, molestie elit in, pretium leo. Vivamus facilisis sodales erat vel dignissim. Sed nulla magna, tincidunt sed bibendum eu, tempor et lorem. Sed lacus turpis, varius vitae molestie in, mollis ac quam. Nam non tempor risus, eu vestibulum mauris. "
    },
    {
      rank:"low",
      date:"3/30/2020, 12:47:02 PM",
      info: "Aenean dui mauris, venenatis luctus pretium id, cursus vel nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ac congue nunc, eget consectetur augue. Nulla sed est ac leo placerat bibendum in nec purus. Etiam eu tincidunt sem. Integer ut nisl in odio pharetra porttitor eu vel justo. Maecenas fermentum, mi at vehicula dignissim, nibh ligula mattis tellus, eget tempor ipsum lorem et velit."
    }
  ]
}

