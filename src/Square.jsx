import React, { useState } from 'react'
import style from './Square.module.css'

function Square({ value, onSquareClick }) {

    return (
        <button className={style.signButton} onClick={onSquareClick}>{value}</button>
    )
}

export default Square