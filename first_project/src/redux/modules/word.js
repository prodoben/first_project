import {
  firestore
} from "../../firebase";

const dictionary_db = firestore.collection("dictionary");

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
// const DELETE = "word/DELETE";
// const UPDATE = "word/UPDATE";


const initialState = {
  word_list: [{
      id: "list_0",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      id: "list_1",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      id: "list_2",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      id: "list_3",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
  ],
};
// Action Creators
export const loadWord = (word_list) => {
  return {
    type: LOAD,
    word_list
  };
};

export const createWord = (word) => {
  return {
    type: CREATE,
    word
  };
};

//파이어 베이스와 통신하는 함수
export const loadDictionaryFB = () => {
  return function (dispatch) { //미들웨어
    dictionary_db.get().then((docs) => {
      let dictionary_data = []; //리덕스에 넣어줄 빈 배열

      docs.forEach((doc) => {
        if (doc.exists) {
          dictionary_data = [...dictionary_data, {
            id: doc.id,
            ...doc.data()
          }];
        }
      })


      dispatch(loadWord(dictionary_data));

    });
  };
};


export const addDictionaryFB = (word) => {
  return function (dispatch) {
    let dictionary_data = {
      word: word.word,
      description: word.desc,
      ex: word.example
    };

    dictionary_db.add(dictionary_data).then((docRef) => {
        dictionary_data = {...dictionary_data, id: docRef.id};
        // dispatch(createDictionary(dictionary_data));
      })
      .catch((err) => {
        window.alert('오류가 났어... 이건 아니야.')
      })
  }
}

// //업데이트
// export const updateDictionaryFB = (index) => {
//   return function(dispatch, getState){
//     const _bucket_data = getState().bucket.list[index]

//     let dictionary_data = {..._dictionary_data, completed: true};

//     dictionary_db.doc(dictionary_data.id).update(dictionary_data).then(docRef = {
//       dispatch(updateDictionary(dictionary));
//     });
//   }
// }

// export const deleteDictionaryFB = (dictionary) => {
//   return function (dispatch, getState) {
//     const _dictionary_data = getState().dictionary.list[dictionary];

//     if (!_dictionary_data.id) {
//       return;
//     }
//     // 삭제하기
//     dictionary_db
//       .doc(_dictionary_data.id)
//       .delete()
//       .then((res) => {
//         dispatch(deleteDictionary(dictionary));
//       })
//       .catch((err) => {
//         console.log("err");
//       });
//   };
// };



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case "word/LOAD": {
      if (action.word.length > 0) {
        return {
          list: action.word
        }
      }
      return state;
    }

    case "word/CREATE":

      const new_word_list = [...state.word_list, action.word];


      return {
        ...state, word_list: new_word_list
      };

    default:
      return state;
  }
}