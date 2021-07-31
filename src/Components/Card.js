const Card = (props) => {

  const shuffled = props.shuffledNum.map((item) => (
      <img 
      onClick={props.handleMatch} 
      key={item.id} 
      id={item.id} 
      src={item.src}
      alt={item.src}
      />

  ))
  return(
    <div>
      {shuffled}
    </div>
  )
}

export default Card