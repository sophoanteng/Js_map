// Map (array & object)
const DINNER_MAP = new Map();
DINNER_MAP.set('Monday', 'Eat and Fish');
DINNER_MAP.set('Tuesday', 'Eat and Eggs');
DINNER_MAP.set('Wednesday', 'Eat and Meat');
DINNER_MAP.set('Thursday', 'Eat and Preykhor');
DINNER_MAP.set('Frien', 'Eat and salt');
DINNER_MAP.set('Saturday', 'Eat and vegatable');
DINNER_MAP.set('Monday', 'Eat and chicken');

DINNER_MAP.forEach((value, key) => {
    const table = document.querySelector('table');
    table.innerHTML +=`
     <tr>
       <td>${key}</td>
       <td>${value}</td>
     </tr>
    `;
    console.log(key + ":" + value);
})

