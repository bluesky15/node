import React from 'react'
import './Component.css'

interface Props {
    lable: String
}


const MyButton: React.FC<Props> = (props: Props) => {
    return (
        <button>{props.lable}</button>
    )
}

export default MyButton;