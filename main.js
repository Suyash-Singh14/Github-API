let Name = document.querySelector(".card .name");
let Bio = document.querySelector(".card .bio");
let Loc = document.querySelector(".card .location");
let form = document.querySelector("form");
let URL_name;
let button = document.querySelector("button");
let input = document.querySelector("input");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

button.addEventListener("click", ()=>{
    URL_name = input.value;    
    let URL = "https://api.github.com/users/" + URL_name;

    fetch(URL).then((val)=>{
        return val.json();
    }).then((data)=>{
        console.log(data);
        if(data.name==undefined){
            Name.innerHTML = "This user doesn't exist!";
        }
        Name.innerHTML = `${data.name}`;
        Bio.innerHTML = `${data.bio}`;
        Loc.innerHTML = `${data.location}`;
    })
})


