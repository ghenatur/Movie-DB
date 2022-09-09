import React, {useState} from 'react';

const PageButton = ({btnPage}) => {
    const [btnCurrent, setBtnCurrent] = useState(1)

    const qntPage = 500
    const btnArr = []
    for (let i = 1; i <= qntPage; i++) {
        btnArr.push(i)
    }


    function handlePrev() {
        setBtnCurrent(btnCurrent-1)


    }

    function handleNext() {
        setBtnCurrent(btnCurrent+1)

    }

    return (
        <div>
            <button onClick={handlePrev}>prev</button>
            {btnArr.map((btn) => {
                return (
                    <button onClick={btnPage} value={btn} key={Math.floor(Math.random() * 100000)}>{btn}</button>
                )
            })}
            <button onClick={handleNext}>next</button>


        </div>
    );
};

export default PageButton;
