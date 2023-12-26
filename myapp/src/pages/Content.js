import Film from "../Film";
import React, { useState } from 'react';
import { Routes, Route,Link } from "react-router-dom";

function Content({filter}) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [genres, setGenres] = useState('');
    const [dir, setDir] = useState('');
    const [wri, setWri] = useState('');
    const [prod, setProd] = useState('');
    const [oper, setOper] = useState('');
    const [comp, setComp] = useState('');
    const [age, setAge] = useState('');
    const [dat, setDate] = useState('');
    const [cun, setCun] = useState('');
    const [len, setLen] = useState('');
    const [url, setUrl] = useState('');
    const [bud, setBud] = useState('');
    const [cash, setCash] = useState('');

    function addFilm() {
        
        let Film = {
            name: name,
            genres: [{name:genres}],
            persons:[{
                name: dir,
                // profession: 'режиссёр'
            },
            {
                name: wri,
                // profession: 'сценарист'
            },
            {
                name: prod,
                // profession: 'продюсер'
            },
            {
                name: oper,
                // profession: 'оператор'
            },
            {
                name: comp,
          //      profession: 'композитор'
            }],
            ageRating: age,
            premiere: {world:dat},
            countries: [{name: cun}],
            movieLength: len,
            poster:{url: url}
        };
        if(name!==''&& url!==''&&genres!==''&&age!==''){
        localStorage.setItem(Film.name,JSON.stringify(Film));
        setCount(count + 1);}
    }

  return (

    <section>
      <div className="container">
        <hr className="my-4" />
      </div>
      <div className="addFilm container">
        <form className="needs-validation">
          <div className="row justify-content-around">
            <div className="col-sm-5">
              <label className="form-label">Название</label>
              <input type="text" className="form-control" id="lab"
                required
                value={name} 
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="col-sm-5">
              <label className="form-label">Страна</label>
              <input type="text" className="form-control" id="con" 
                value={cun} 
                onChange={(event) => setCun(event.target.value)}
              />
            </div>

            <div className="col-sm-5">
              <label className="form-label">Жанр</label>
              <input type="text" className="form-control" id="jan"
                required
                value={genres} 
                onChange={(event) => setGenres(event.target.value)}
              />
            </div>

            <div className="col-sm-5">
              <label className="form-label">Режиссёр</label>
              <input type="text" className="form-control" id="wri"
                value={dir} 
                onChange={(event) => setDir(event.target.value)}
              />
            </div>
            <div className="col-sm-5">
              <label className="form-label">Сценарист</label>
              <input type="text" className="form-control" id="wri"
                value={wri} 
                onChange={(event) => setWri(event.target.value)}
              />
            </div>

            <div className="col-sm-5">
              <label className="form-label">Продюсер</label>
              <input type="text" className="form-control" id="prod"
                value={prod} 
                onChange={(event) => setProd(event.target.value)}
              />
            </div>
            <div className="col-sm-5">
              <label className="form-label">Оператор</label>
              <input type="text" className="form-control" id="oper"
                value={oper} 
                onChange={(event) => setOper(event.target.value)}
              />
            </div>
            <div className="col-sm-5">
              <label className="form-label">Композитор</label>
              <input type="text" className="form-control" id="comp"
                value={comp} 
                onChange={(event) => setComp(event.target.value)}
              />
            </div>

            <div className="col-sm-5">
              <label className="form-label">Рейтинг возраста</label>
              <input type="number" className="form-control" id="age"
                required
                value={age} 
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
            <div className="col-sm-5">
              <label className="form-label">Длительность</label>
              <input type="text" className="form-control" id="long"
                value={len} 
                onChange={(event) => setLen(event.target.value)}
              />
            </div>

            <div className="col-sm-5">
              <label className="form-label">Бюджет</label>
              <input type="text" className="form-control" id="bud"
                value={bud} 
                onChange={(event) => setBud(event.target.value)}
              />
            </div>
            <div className="col-sm-5">
              <label className="form-label">Мировые сборы</label>
              <input type="text" className="form-control" id="cash"
                value={cash} 
                onChange={(event) => setCash(event.target.value)}
              />
            </div>

            <div className="col-sm-5">
              <label className="form-label">Дата выхода</label>
              <input type="date" className="form-control" id="rel"
                value={dat} 
                onChange={(event) => setDate(event.target.value)}
              />
            </div>

            <div className="col-sm-5">
              <label className="form-label">Постер (ссылка)</label>
              <input type="text" className="form-control" id="imageurl"
                required
                value={url} 
                onChange={(event) => setUrl(event.target.value)}
              />
            </div>
          </div>

          <hr className="my-4" />

          <button
            className="btn btn-primary btn-lg"
            id="sub"
            type="submit"
            onClick={addFilm}
          >
            Добавить
          </button>
          <hr className="my-4" />
          
        </form>
      </div>
      <button
            className="btn btn-primary btn-lg"
            id="sub"
            onClick={() => {
                addFilm1(setCount);
              }}
          >
            Новый фильм
        </button>

      
      <hr className="my-4" />
      <div className="articles">
        {init(filter).map((item, index) => (
          <Film key={index} film={item}/>
        ))}
      </div>
      <hr className="my-4" />
    </section>
    
  );
}

function addFilm1(setCount) {
    const apiUrl = "https://api.kinopoisk.dev/v1.3/movie/random";
    fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "X-API-KEY": "VRZPSBY-V3SME8B-N3A4TAN-QZF2GE6",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        result.see = 0;
        localStorage.setItem(result.name, JSON.stringify(result));
        setCount(Math.floor(Math.random()*100));
      });
  }

function init(filter) {
    let Films = [];
    let janar = RegExp(filter.genres, 'g');
      let direc = RegExp(filter.dir, 'g');
      let count = RegExp(filter.cun, 'g');
      Films = [];
      Object.keys(localStorage).forEach(function (key) {
          let data = localStorage.getItem(key);
          if (data != null) {
              let obj = JSON.parse(data);
              let director=false;
              if(filter.dir!==""){
              for(let i = 0;i<obj.persons.length;i++){
                if(direc.test(obj.persons[i].name)&&obj.persons[i].profession==="режиссер"){
                  director=true;
                }
              }}else director=true;
              let gen=false;
              if(filter.genres!==""){
              for(let i = 0;i<obj.genres.length;i++){
                if(janar.test(obj.genres[i].name)){
                  gen=true;
                }
              }}else gen=true;
              if (obj.countries != null && filter.cun !== "") {
                  if (gen && director && count.test(obj.countries[0].name)) {
                      if (filter.agearr === 1) {
                          if (obj.ageRating >= filter.age)
                              Films[Films.length] = obj;
                      }
                      else if (filter.agearr === 2) {
                          if (obj.ageRating <= filter.age)
                              Films[Films.length] = obj;
                      }
                      else
                          Films[Films.length] = obj;
                  }
              }
              else if (filter.cun === ""){
                  if (gen && director) {
                      if (filter.agearr === 1) {
                          if (obj.ageRating >= filter.age)
                              Films[Films.length] = obj;
                      }
                      else if (filter.agearr === 2) {
                          if (obj.ageRating <= filter.age)
                              Films[Films.length] = obj;
                      }
                      else
                          Films[Films.length] = obj;
                  }
          }}
      });
    return Films;
  }

export default Content;
