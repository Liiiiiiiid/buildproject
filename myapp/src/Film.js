import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/md';
import Modal from './modal/Modal';


function Film({film}) {
  console.log(film);
  const [count, setCount] = useState(0);
  const [modalActive, setModalActive]=useState(false);
  const [FilmActive, setFilmActive]=useState(true);
if(film.ageRating==null ) film.ageRating = 16;
    let gener="";
    for(let i = 0;i<film.genres.length;i++){
      if(i!==film.genres.length-1)
      gener+= film.genres[i].name+", ";
      else
      gener+= film.genres[i].name;
    }
    if(FilmActive)
  return (
    <article className={FilmActive ? '' : 'none'}>
      <span className="material-symbols-outlined" id="close" onClick={()=>{setModalActive(true)}}>
                X
                </span>
            <div className="card mb-3">
            <div className="row g-0">
                  <div className="col-md-4">
                    <img src={film.poster.url} alt="" className="img-fluid rounded-start"/>
                  </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">  {film.name}  </h5>
                        <p>
                          <Link to={"/Info"} state={{ film: {film} }}>
                              Узнать больше
                            </Link>
                              
                        </p>
                        <p>                         
                        Жанр: {gener}
                        </p>
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive} setFilmActive={setFilmActive} name={film.name}/>
                
              </div></div>
            </article>
  );
}

export default Film;
