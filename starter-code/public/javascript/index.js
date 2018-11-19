
function fetchAll(){
  axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        $('.character-info').html("<ul id='list'></ul>)
        response.data.forEach((eachCharacter)=>{

          $('#list').append(`
          <li>    
          name: ${eachCharacter.name}
          occupation: ${eachCharacter.occupation}
          weapon: ${eachCharacter.weapon}
          debt: ${eachCharacter.debt}
          </li>
          `)
        }
    })
    .catch((err)=>{
      console.log(err);
    })
}

  $('#fetch-all').click(fetchAll);

  // alternative versions

  