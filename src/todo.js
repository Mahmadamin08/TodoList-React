import React, { useEffect, useState } from "react";


const getLocalData = () => {
    let l = localStorage.getItem('list')
    if (l) { return JSON.parse(localStorage.getItem('list')) }
    else
        return [];
}

function Todo() {


    const [inputD, setInpD] = useState("");
    const [items, setItems] = useState(getLocalData)
    const addItem = () => {
        if (inputD) {
            setItems([...items, inputD]);
            setInpD("");
        }
    }

    const deleteItem = (id) => {
        const updateItem = items.filter((e, index) => {
            return index != id;
        });
        setItems(updateItem);
    }

    //Add data to local storage
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main">
                <div className="cont">
                    <h1 className="heading">todos</h1>
                    <div className="inp box">
                        <input type="text " placeholder=" ✍️ Enter Your Task !" value={inputD} onChange={(e) => setInpD(e.target.value)}></input>
                        <button className="add btn-grad" onClick={addItem}>➕</button>
                    </div>
                    <div className="todos">
                        {
                            items.map((e, i) => {
                                return (
                                    <div className="eachItem" key={i}>
                                        <h3 className="h3Style">{e}</h3>
                                        <button className="dele" onClick={() => deleteItem(i)}>⛔</button>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
