import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import { addDictionaryFB } from "./redux/modules/word"



const Write = (props) => {

  const dispatch = useDispatch();

  const word_ref = React.useRef(null);
  const desc_ref = React.useRef(null);
  const example_ref = React.useRef(null);

  const addWord = () => {
    const word = {
      id: "word", 
      word: word_ref.current.value, 
      desc: desc_ref.current.value,
      example: example_ref.current.value,
    };

    dispatch(addDictionaryFB(word));
    props.history.replace('/');
  };

  return (
    <React.Fragment>
      <Title>단어 추가하기</Title>
      <InputWrapper>
        <p>이상한 단어</p>
        <input ref={word_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>이렇게 씁니다</p>
        <input ref={desc_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>예를 들자면</p>
        <input ref={example_ref} />
      </InputWrapper>

      {}
      <Button onClick={addWord}>추가하기</Button>
    </React.Fragment>
  );
};


const Title = styled.h1`
  width: 90vw;
  margin: 8px auto;
`;

const InputWrapper = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
  & > p {
    text-decoration: underline;
    font-size: 8px;
    color: #888888;
    margin: 4px 0px;
  }

  & > input {
    border: 1px solid #000000;
    width: 100%;
    padding: 2px 4px;
    margin: 4px 0px;
    box-sizing: border-box;
  }
`;


const Button = styled.button`
  background-color: #6100ff;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 0px;
  margin: 16px;
`;

export default Write;