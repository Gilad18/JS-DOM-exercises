const baseEndPoint = 'https://swapi.dev/api/people' ;
const myTable = document.querySelector('.table')

 const fetchcharacter = async () => {
    const charcter = await fetch(baseEndPoint);
    const data = await charcter.json();

    let users = []
    
    for (let i=0; i<data.results.length; i++) {
        let world = await getWorld(data.results[i].homeworld)            
        users.push({
            name : data.results[i].name ,
            height : data.results[i].height,
            hairColor : data.results[i].hair_color,
            worldName : world.name,
            population : world.population
        });
    }

   return  users;

    }
  


 async function getWorld(url) {
     let world = await fetch(url);
      return await world.json();
    }

    
    async function createTable() {
        let theUsers = await fetchcharacter();
        let table = document.createElement('table');
        theUsers.forEach((u) => {
            console.log(u)
            table.innerHTML += `<tr>
                <td>${u.name}</td>
                 <td>${u.hairColor}</td>
                  <td>${u.height}</td>
                   <td>${u.worldName}</td>
                   <td>${u.population}</td>
                    </tr>`
        })
        myTable.appendChild(table)
    
    }
