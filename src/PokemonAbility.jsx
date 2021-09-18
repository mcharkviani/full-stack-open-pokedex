import React from "react"

const PokemonAbility = ({ abilityName, state }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">{state} ability</div>
    <div className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

export default PokemonAbility
