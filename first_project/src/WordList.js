import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { firestore } from "./firebase";



const WordList = (props) => {
  const word_list = useSelector((state) => state.word.word_list); 
  
  return (
    <React.Fragment>
      <Memo>
      <Title >이상하지만 중독적인 단어사전</Title>
      {word_list.map((w) => {
        return (
          <Card key={w.id}>
            <Text color="#888888" size="8px" underline>
              이상한 단어
            </Text>
            <Text>{w.word}</Text>
            <Text color="#888888" size="8px" underline>
              무엇인가!?
            </Text>
            <Text>{w.desc}</Text>
            <Text color="#888888" size="8px" underline>
              요렇게 씁니다 요
            </Text>
            <Text color="blue">{w.example}</Text>
          </Card>
        );
      })}
      <AddButton
        onClick={() => {
          props.history.push("/write");
        }}
      >
        +
      </AddButton>
      </Memo>
    </React.Fragment>
  );
};

 

const Memo = styled.div`
width: 80vw;
margin: auto;
`

const Title = styled.h1`
  border-radius:100px;
  width: 70vw;
  margin-top: 50px;
  padding: 50px 50px 50px 50px;
  color: white;
  background-color:#003d33;
  border: 1px solid #439889
`;

const Card = styled.div`
  width: 70vw;
  height: 30vW; 
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #003d33;
  border: 1px solid #439889
`;


const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "32px")};
  ${(props) => (props.underline ? "text-decoration: underline;" : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  margin: 4px 0px;
`;


const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #6100ff;
  color: #ffffff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default WordList;
