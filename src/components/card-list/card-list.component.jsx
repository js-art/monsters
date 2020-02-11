import React,{memo} from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.componet'
export const CardList =memo((props)=>{
    return (
        <div className="card-list">
         {props.monsters.map(monster=><Card key={monster.id} monster={monster} />)}
        </div>
    )
})
