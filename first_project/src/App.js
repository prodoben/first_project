import React from 'react';
import { Route } from 'react-router';


import {BrowserRouter} from "react-router-dom";

import styled from "styled-components";

import Write from "./Write";
import WordList from "./WordList";



const App = () => {
  
  return (
    <React.Fragment>
      <Wrapper>
        <BrowserRouter>
          <Route path="/" exact component={WordList} />
          <Route path="/write" exact component={Write} />
        </BrowserRouter>
      </Wrapper>
    </React.Fragment>
  );
}



const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #00695c;
`;

// const dictionary = firesore.collection("dictionary")
// dictionary.doc("dictionary_item1"),get().then((doc)) => {
//   console.log(doc.a);
// }

export default App;
