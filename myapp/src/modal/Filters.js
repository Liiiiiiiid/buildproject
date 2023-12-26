
import React, { useState } from "react";

const Filter = ({setFilter }) => {
  const [genres, setGenres] = useState("");
  const [dir, setDir] = useState("");



  return (
    <section>
      <div className="row justify-content-around">
        <div className="row ov">
          <div className="col-sm-5">
            <label className="form-label">Жанр</label>
            <input
              type="text"
              className="form-control"
              id="jan1"
              value={genres} 
                onChange={(event) => setGenres(event.target.value)}
            />
          </div>
          <div className="col-sm-5">
            <label className="form-label">Режиссёр</label>
            <input
              type="text"
              className="form-control"
              id="dir1"
              value={dir} 
            onChange={(event) => setDir(event.target.value)}
            />
            <hr class="my-4"></hr>
          </div>
          </div>
          <button className="btn btn-primary btn-lg" id="sub" onClick={()=>{
              setFilter({
                genres:genres,
                dir: dir
              });

          }}>Фильтр</button>
        </div>
    </section>
  );
};

export default Filter;
