import React from 'react'

const Sushi = props => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={props.sushi.price <= props.money ? () => props.eatSushi(props.sushi) : null}>
        {
          props.eatenSushi.includes(props.sushi)
          ?
            null
          :
            <img alt="props.sushi.name" src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
