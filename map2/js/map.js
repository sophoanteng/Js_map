
const DINNER_MAP = new Map();
DINNER_MAP.set(123, {"name": "Soklien", "age":27, "province": "Kampong Thom"});
DINNER_MAP.set(124, {"name": "Bunneth", "age":20, "province": "Siem Riep"});
DINNER_MAP.set(125, {"name": "Sotra", "age":4, "province": "Kampong Cham"});
DINNER_MAP.set(126, {"name": "Vuthy", "age":16, "province": "Battambang"});
DINNER_MAP.set(127, {"name": "Sokphorn", "age":22, "province": "Pursat"});

DINNER_MAP.forEach((value, key) => {
    const table = document.querySelector('table');
    table.innerHTML +=`
     <tr>
      <td>${key}</td>
       <td>${value.name}</td>
       <td>${value.age}</td>
       <td>${value.province}</td>
       </tr>
    `;
})

/* <tr>
<td>${value}</td>
 <td>${key.name}</td>
 <td>${key.age}</td>
 <td>${key.province}</td>
 </tr> */

