// // const contacts = [
// //     {
// //       id: 1,
// //       name: "Ifra",
// //       gmail: "ifrashamim29@gmail.com",
// //     },
// //     {
// //       id: 2,
// //       name: "Nisha",
// //       gmail: "nishashamim15@gmail.com",
// //     },
// //     {
// //       id: 3,
// //       name: "Tehreem",
// //       gmail: "tehreemshamim14@gmail.com",
// //     },
// //   ];
  
// //   function renderContacts(contacts) {
// //     const contactList = document.getElementById("contact-List");
// //     contactList.innerHTML = "";
// //     for (const contact of contacts) {
// //       const contactDiv = document.createElement("div");
// //       contactDiv.className = "contact";
// //       contactDiv.innerHTML = `
// //       <b>${contact.name}</b>
// //       <p>${contact.gmail}</p>
// //       `;
// //       contactList.appendChild(contactDiv);
// //     }
// //   }
// //   function filterContacts() {
// //     const filterInput = document
// //       .getElementById("filter-input")
// //       .value.toLowerCase();
// //     const filterContacts = contacts.filter((contact) =>
// //       contact.name.toLowerCase().includes(filterInput)
// //     );
// //     renderContacts(filterContacts);
// //   }
// //   renderContacts(contacts);
// //   document.getElementById('filter-button').addEventListener('click', filterContacts);
  
// // // const arry =[
// // //     {
// // //         id : "1",
// // //         Name : "Humna",
// // //         fatherName : "Abdul Anees",
// // //     },
// // //     {
// // //         id : "2",
// // //         Name : "Dua",
// // //         fatherName : "Abdul Anees",
// // //     },
// // //     {
// // //         id : "3",
// // //         Name : "Nazneen",
// // //         fatherName : "Abdul Anees",
// // //     }
// // // ]
// // // const text=""
// // // for(const arry1 of arry){
// // //     const indele.documentcreateElement('div');
// // // }

// // Filter , Map , Reduce
// // const num = [40,41,42,43,44,45,46,47,48,49,50];
// // console.log(num.filter((num) => num > 44));
// // console.log(num.map(num => num * 3));

// const { log } = require("surge/lib/util/helpers");

// const contacts = [
//   {
//     id: 1,
//     name: "Ifra",
//     gmail: "ifrashamim29@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Nisha",
//     gmail: "nishashamim15@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Tehreem",
//     gmail: "tehreemshamim14@gmail.com",
//   },
// ];

// function renderContacts(contacts) {
//   const contactList = document.getElementById("contact-List");
//   contactList.innerHTML = "";
//   for (const contact of contacts) {
//     const contactDiv = document.createElement("div");
//     contactDiv.className = "contact";
//     contactDiv.innerHTML = `
//     <b>${contact.name}</b>
//     <p>${contact.gmail}</p>
//     `;
//     contactList.appendChild(contactDiv);
//   }
// }
// function filterContacts() {
//   const filterInput = document
//     .getElementById("filter-input")
//     .value.toLowerCase();
//   const filterContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filterInput)
//   );
//   renderContacts(filterContacts);
// }
// renderContacts(contacts);
// document.getElementById('filter-button').addEventListener('click', filterContacts);

// function sum(a,b){
//   let sum = a + b;
//   console.log(sum);
// }
// sum(2,7);
// sum(11,8);
// Filter , Map , Reduce
// const num = [40,41,42,43,44,45,46,47,48,49,50];
// console.log(num.filter((num) => num > 44));
// console.log(num.map(num => num * 3));

const contacts=[
    {
        id: 1,
        name: "Humna",
        email: "aneeshumna455@gmail.com"
    },
    {
        id: 2,
        name: "Dua",
        email: "duaanees@gmail.com"
    },
    {
        id: 3,
        name: "Amna",
        email: "amnaahmed143@gmail.com"
    },
    {
        id:4,
        name: "usama",
        email: "usamaseikh@gmail.com"
    }
];
// Filter , Map , Reduce
// const num = [40,41,42,43,44,45,46,47,48,49,50];
// console.log(num.filter((num) => num > 44));
// console.log(num.map(num => num * 3));




function renderContacts(contacts) {
  const contactList = document.getElementById("contact_list");
  contactList.innerHTML = "";
  for (const contact of contacts) {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    contactDiv.innerHTML = `
    <b>${contact.name}</b>
    <p>${contact.email}</p>
    `;
    contactList.appendChild(contactDiv);
  }
}
function filterContacts() {
  const filterInput = document
    .getElementById("filter-input")
    .value.toLowerCase();
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterInput)
  );
  renderContacts(filterContacts);
}
renderContacts(contacts);
document.getElementById('filter-button').addEventListener('click', filterContacts);



// const arr=[
//     {
//         name: "Bisma",
//         f_name: "Junaid"
//     },
//     {
//         name: "Amna",
//         f_name: "Bilal"
//     },
//     {
//         name: "Anas",
//         f_name: "Ahmed"
//     },
    
// ];

// for (let arr1 of arr){
//     let indele= document.createElement('div');
//     indele+=arr1+"<br>";
//     console.log(document.getElementById("demo").innerHTML=indele);
// }