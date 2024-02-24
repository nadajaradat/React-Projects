import React from 'react'

function Buttons({handleClick}) {
    const clickBtn = (e) => {
        const value = e.target.getAttribute('data-value');
        handleClick(value);
    }
  return (
    <>
    <div className='row'>
        <div className='btn bg-gray' data-value ='C' onClick={clickBtn}>C</div>
        <div className='btn bg-gray' data-value ='+/-' onClick={clickBtn}>+/-</div>
        <div className='btn bg-gray' data-value ='%' onClick={clickBtn}>%</div>
        <div className='btn bg-orange' data-value ='÷' onClick={clickBtn}>÷</div>
    </div>

    <div className='row'>
        <div className='btn' data-value ='7'  onClick={clickBtn}>7</div>
        <div className='btn' data-value ='8'  onClick={clickBtn}>8</div>
        <div className='btn' data-value ='9'  onClick={clickBtn}>9</div>
        <div className='btn bg-orange' data-value ='x'  onClick={clickBtn}>x</div>
    </div>

    <div className='row'>
        <div className='btn' data-value ='4'  onClick={clickBtn}>4</div>
        <div className='btn' data-value ='5'  onClick={clickBtn}>5</div>
        <div className='btn' data-value ='6'  onClick={clickBtn}>6</div>
        <div className='btn bg-orange' data-value ='-'  onClick={clickBtn}>-</div>
    </div>

    <div className='row'>
        <div className='btn' data-value ='3'  onClick={clickBtn}>3</div>
        <div className='btn' data-value ='2'  onClick={clickBtn}>2</div>
        <div className='btn' data-value ='1'  onClick={clickBtn}>1</div>
        <div className='btn bg-orange' data-value ='+'  onClick={clickBtn}>+</div>
    </div>

    <div className='row'>
        <div className='btn btn-0' data-value ='0'  onClick={clickBtn}>0</div>
        <div className='btn' data-value ='.'  onClick={clickBtn}>.</div>
        <div className='btn bg-orange' data-value ='='  onClick={clickBtn}>=</div>
    </div>
    </>
  )
}

export default Buttons