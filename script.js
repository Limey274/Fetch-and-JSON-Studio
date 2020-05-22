function sortTime(a, b){
    return b.hoursInSpace - a.hoursInSpace
}
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
       response.json().then(function(json) { 
           const div = document.getElementById("container");
          const count= document.getElementById('count')
          count.innerHTML = `Count ${json.length}`
            let indexArr= [];
           let text= '';
        for (let i=0; i<json.length; i++){
           //console.log(i)
            //return json;
            
            json.sort(sortTime)
            text +=  ` 
            <div class= "astronaut">
                <div class= "bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li id= "${json[i].id}" class= "active">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>

                </div>
                <img class= "avatar" src= ${json[i].picture}>
            </div>
           
           `
           if (json[i].active === true){
               //document.getElementById(json[i].id).style.color= "green"
               //document.getElementById(`${json[i].id}`).style.color='green'
            //  console.log(json[i].id)
                 
            indexArr.push(json[i].id)

           }
        }
        container.innerHTML = text
            for(i=0; i<indexArr.length; i++ ){
                document.getElementById(indexArr[i]).style.color= "green"
            }    
    })


       });
    })