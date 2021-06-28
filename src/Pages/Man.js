import React from 'react'
import { Characters } from '../Models/Characters'

const Man = () => {

const man = Characters.filter(character => character.type === "h")
    return (
        <div className="container mt-3">
            <h1>Guerreros z</h1>
            <hr/>
            {
                man.map(man => <h1>{man.id}</h1>)
            }
        </div>
    )
}

export default Man
