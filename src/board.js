import React, { useState } from 'react';

const Board = () => {
    const [boards, setBoard] = useState([
        {id: 0, title: '첫 번째 글', contents: 'React 첫 스터디'},
        {id: 1, title: '두 번째 글', contents: '다들 화이팅'}
    ]);

    const [inputTitle, setInputTitle] = useState('');
    const [inputContents, setInputContents] = useState('');
    const [nextId, setNextId] = useState(2);

    const onChangeTitle = e => setInputTitle(e.target.value);
    const onChangeContents = e => setInputContents(e.target.value);
    const onClick = () => {
        const nextBoards = boards.concat({
            id: nextId,
            text: inputTitle,
            contents: inputContents
    });
    setNextId(nextId + 1);
    setBoard(nextBoards);
    setInputTitle('');
    setInputContents('');
};


    const onRemove = id => {
        const nextBoards = boards.filter(board => board.id !==id);
        setBoard(nextBoards);
    };

    const boardsList = boards.map(board => (
        <div key={board.id} onClick={() => onRemove(board.id)}>
            글 제목 : {board.title}
            <br/>
            내용 : {board.contents}
        </div>
    ));

    return (

        <div>
            <h1>게시판</h1>

            <input
                type="text"
                name="title"
                placeholder="글 제목"
                value={inputTitle}
                onChange={onChangeTitle}
            />
            <br/>
            <textarea
                name="contents"
                placeholder="내용"
                cols="30"
                rows="5"
                value={inputContents}
                onChange={onChangeContents}
            />
            <br/>
            <button> 파일선택 </button>
            <text>선택된 파일 없음</text>
            <br/>
            <button onClick={onClick}>작성하기</button>
            <div>{boardsList}</div>
        </div>
        );
    }





export default Board;
