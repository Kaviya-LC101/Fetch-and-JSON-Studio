// TODO: add code here
window.addEventListener("load",function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
             const destination=document.getElementById("container")
            json.sort(function(a,b){
                return b.hoursInSpace-a.hoursInSpace;
            });
             let i=0
             while(i<json.length){
             destination.innerHTML +=`<div class=astronaut>
              <h3>${json[i].firstName} ${json[i].lastName}</h3>
             <ul>
             <li>Hours in Space:${json[i].hoursInSpace}</li>
             <li id=astronautStatus${json[i].id}>Active:${json[i].active}</li>
             <li>Skills:${json[i].skills}</li>
             </ul>
             <img class=avatar src=${json[i].picture}>
             </div>
             `
             if(json[i].active===true){
               document.querySelector(`#astronautStatus${json[i].id}`).style.color="green";
             }
             else{
                document.querySelector(`#astronautStatus${json[i].id}`).style.color="Red";
             }
             i +=1
             }
             destination.innerHTML +=`<h3>Total Astronauts:${json.length}</h3>`;
        });
    });
});