function movieObject(title,scr,hour,min,date,imdb){
    return  {
        title,
        scr,
        imdb,
        date,
        hour,
        min,
        get time(){
            return `${this.hour}HR ${this.min}MIN`
        }
    }
}
let movieList=[]

let hungerGames=movieObject('hungerGames: mockingjay','./pics/mockingjay.jpg','2','3','mon 18 june- 6:30pm',6.6)
movieList.push(hungerGames)

let xMen=movieObject('xMen:dark phoneix','./pics/daRKphoneix.jpg','1','54','mon 18 june- 9:30pm',5.7)
movieList.push(xMen)

let theNun=movieObject('theNun','./pics/THE-NUN.jpg','3','13','mon 18 june- 9:30pm',9.7)
movieList.push(theNun)

let ironMan=movieObject('ironMan2','./pics/Iron-Man-2.jpg','2','30','mon 18 june- 9:30pm',8.1)
movieList.push(ironMan)

let knivesOut=movieObject('knivesOut','./pics/knivesout.jpeg','2','13','mon 18 june- 9:30pm',7.7)
movieList.push(knivesOut)

let extraction=movieObject('extraction','./pics/EXTRACTION.jpg','2','13','sun 8 june- 6:30pm',6.7)
movieList.push(extraction)




function CreatMovieCard(obj){
  return  `
     <div class="movie-card">
        <img src=${obj['scr']} />
            <p class="title">${obj['title']}</p>
            <p class="imdb left"><span>${obj['imdb']} </span>/10</p>
            <p class="update">last Update </p>
            <p class="update-info left">release Time</p>
            <p class="date">${obj['date']}</p>
            <p class="time left">${obj['time']}</p>
    </div>
    `
}
function movieHtmls(arr){
    return arr.map(movie=>{
         return CreatMovieCard(movie)
    }).join('')
}
let movieContainer=document.getElementById('movie-container')
movieContainer.innerHTML=movieHtmls(movieList)

function onSearch(element){
    let searchTerm=element.value;
    let movieFilter=movieList.filter(movie=>{
       return (movie.title.includes(searchTerm))

    })
    movieContainer.innerHTML=movieHtmls(movieFilter)
}