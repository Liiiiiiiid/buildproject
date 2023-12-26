import { useLocation } from 'react-router-dom';
import { Routes, Route,Link } from "react-router-dom";

function Person({name}) {
  return (
    <p>{name}</p>
  );
}

function Info() {
    const location = useLocation()
    const { film } = location.state;
    const filmdata = film.film;
    const length = filmdata.persons.length;
    let str=[];
    for(let i = 0;i<length;i++){
      if(filmdata.persons[i].name!=null&&filmdata.persons[i].name!=="")
      str[i]= filmdata.persons[i].name;
      else if(filmdata.persons[i].enName!=null)
      str[i]= filmdata.persons[i].enName;
    }
    let gener="";
      for(let i = 0;i<filmdata.genres.length;i++){
        if(i!==filmdata.genres.length-1)
        gener+= filmdata.genres[i].name+", ";
        else
        gener+= filmdata.genres[i].name;
      }
      return (
  
      <div className="row about container">
        
        <div className="col-lg-4">
            <img src={filmdata.poster.url} alt="" />
        </div>
        <div className="col-lg-8 whiteb">
        <Link to="/" className="nav-link px-2">
            <button
                className="btn btn-primary btn-lg"
                id="sub"
            >
                Главная
            </button>
        </Link>
        <hr className="my-4" />
            <p className="Title">{filmdata.name}</p>
            <p>Жанр: {gener}</p>
            <p>Возрастной рейтинг: {filmdata.ageRating}+</p>
            <p>Страна: {filmdata.countries[0].name ? filmdata.countries[0].name:""}</p>
            <p>Продолжительность: {filmdata.movieLength ? filmdata.movieLength + " минут":""} </p>
            <p>{filmdata.description ? filmdata.description : ""}</p>
            <hr/>
            <p>Над фильмом работали:</p>
            {str.map((item, index)=>(
            <Person key={index} name={item} />
            ))}
        </div>
        
        
      </div>
      );
    }
    
    export default Info;