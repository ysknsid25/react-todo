import React from 'react';
import {FC, useEffect, useState} from 'react';

const Todo: FC = () => {

    const getKey = () => Math.random().toString(32).substring(2);
    const [items, setItems]: [{ key: string; text: string;}[], any] = useState([]);

    const [inputText, setInputText] = useState('');

    useEffect(() => {
        setInputText('');
    }, []);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const addTask = () => {
        if(inputText === ''){
            alert('タスクを入力せい');
            return;
        }
        setItems([...items, {key: getKey(), text: inputText}]);
        setInputText('');
    };

    const delTask = (key: string) => {
        setItems(items.filter((item) => item.key !== key));
    };
    
    return (
        <>
            <input type="text" value={inputText} onChange={e => handleTextChange(e)}/>
            <input type="button" value="ADD" onClick={() => addTask()}/>
            {
                items.map((item) => {
                    return (
                        <p key={item.key}>
                            <span>{item.text}</span>
                            <input type="button" value="DEL" onClick = {() => delTask(item.key)}/>
                        </p>
                    )
                })
            }
        </>
    );
};

export default Todo;