import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="page">
      <Header/>

      <Main/>

      <Footer/>

      <template id="element-template">
        <div className="element">
          <button className="delete-element-button opacity" type="button" aria-label="удалить"> </button>
          <img className="element__mask-group" src="#" alt=""/>
            <div className="element__description">
              <h2 className="element__text"> </h2>
              <div className="element__like-container">
                <button className="like-button opacity" type="button" aria-label="нравится"> </button>
                <span className='element__like-counter'>0</span>
              </div>
            </div>
        </div>
      </template>
    </div>
  );
}

export default App;
