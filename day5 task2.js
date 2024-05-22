const resume = {
    personalInformation: {
      name: "selvananthan",
      contact: {
        email: "selvagoogly@gmail.com",
        phone: "9791456689",
        address: {
          street: "5-1-12D/23/1,pooncholai,chinnalapatti",
          city: "dindigul",
          state: "Tamilnadu",
          zip: "624301",
          country: "india"
        }
      },
      github: "https://github.com/selvananthan",
    },
    education: [
      {
        degree: "Bachelor of Mechanical",
        institution: "Anna University",
        yearOfGraduation: 2015,
        CGPA: 6.5
      },
      {
        degree: "Diploma in mechanical",
        institution: "DOTE",
        yearOfGraduation: 2012,
        CGPA: 7.5
      }
    ],
    workExperience: [
      {
        jobTitle: "Senior Branch Head",
        company: "Ceasefire industries pvt ltd",
        startDate: "2023",
        endDate: "Present",
        responsibilities: [
          "marketing and sales",
          "Customer management",
          "Meet the monthly tartgets"
        ]
      },
      {
        jobTitle: "Business development manager",
        company: "Byju's",
        startDate: "April 2021",
        endDate: "Feb 2022",
        responsibilities: [
          "Meet the targets",
          "Earning new customers",
          "Teaching"
        ]
      }
    ],
    skills: [
      "Autocad",
      "Solidworks",
      "Sketchup",
      "SAP",
      "Photoshop",
    ],

    languages: [
      {
        language: "Tamil",
        proficiency: "Native"
      },
      {
        language: "English",
        proficiency: "Intermediate"
      }
    ],
    interests: ["Coding", "Reading", "Traveling", "Photography"]
  };
  

  console.log(JSON.stringify(resume, null, 2));
  
  
  // Using 'for' loop
  console.log("Using 'for' loop:");
  for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
  }
  
  // Using 'for...in' loop
  console.log("\nUsing 'for...in' loop:");
  for (let section in resume) {
    console.log(`${section}: ${JSON.stringify(resume[section], null, 2)}`);
  }
  
  // Using 'for...of' loop for arrays
  console.log("\nUsing 'for...of' loop for education:");
  for (let edu of resume.education) {
    console.log(edu);
  }
  
  // Using 'forEach' loop for arrays
  console.log("\nUsing 'forEach' loop for workExperience:");
  resume.workExperience.forEach(work => {
    console.log(work);
  });
  