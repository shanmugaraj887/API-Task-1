let container = document.createElement("div");
container.setAttribute("class","container")

let rowAnimal = document.createElement("div");
rowAnimal.setAttribute("class","row")
////////////// FETCHING THE ANIMALS/////////////////////
async function zooAni(){
    let zoo = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    let zooAnimals= await zoo.json();
    
    try {
        if (Response == 200){
            throw new Error("please check the URL")
        }
        ///////////LOOPING TO ADD TEN ANIMALS /////////////////
        for (let i=0;i<zooAnimals.length;i++){
            let colAnimal = document.createElement("div");
            colAnimal.setAttribute("class","col-md-6")
            colAnimal.innerHTML=`
            <div class="animal-name">${zooAnimals[i].name}</div>
            <div>
            <img src="${zooAnimals[i].image_link}"class="animal-image" >
            </div>
            <div class="about-animal">
            <div><b>Latin Name</b> :${zooAnimals[i].latin_name}</div>
                <div><b>Type</b> :${zooAnimals[i].animal_type}</div>
                <div><b>Active Time</b> :${zooAnimals[i].active_time}</div>
                <div><b>Diet</b> :${zooAnimals[i].diet}</div>
                <div><b>Lifespan</b> :${zooAnimals[i].lifespan}</div>
                <div><b>Length Max</b> :${zooAnimals[i].length_max}</div>
                <div><b>Length Min</b> :${zooAnimals[i].length_min}</div>
                <div><b>Weight Max </b>:${zooAnimals[i].weight_max}</div>
                <div><b>Weight Min </b>:${zooAnimals[i].weight_min}</div>
                <div><b>Habitat </b>:${zooAnimals[i].habitat}</div>
                <div><b>GEO Range</b> :${zooAnimals[i].geo_range}</div>
            </div>`
                
            
        
        rowAnimal.append(colAnimal)
        
        }
    } catch (error) {
        colAnimal.innerHTML="please check the url"
        console.log(error)
    }
    /////////////////CLEARING THE PREVIOUS 10 ANIMALS TO DISPLAY CURRENT RANDOM//////////////////////
    let colQUuery = document.querySelectorAll(".col-md-6")
    if(colQUuery.length == 20){
        for(let i=0;i<colQUuery.length-10;i++){
            colQUuery[i].remove()
        }
    }
        
    container.append(rowAnimal);
}

 


let div= document.createElement("div")
div.setAttribute("class","button-space")

let btn = document.createElement("button");
btn.setAttribute("id","button");
btn.innerHTML="CLICK FOR RANDOM 10 ANIMALS"
btn.addEventListener("click",zooAni );


div.append(btn)
document.body.append(div)
document.body.append(container); 
