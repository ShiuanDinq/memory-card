const Card = (props) => {

  const shuffled = props.shuffledNum.map((item) => (
    <div style={{display:"flex", justifyContent:"center"}}class="column is-2">
      <img class="card pressed"
      onClick={props.handleMatch} 
      key={item.id} 
      id={item.id} 
      src={item.src}
      alt={item.src}
      />
    </div>


  ))
  return(
    <div  class="section columns is-centered is-multiline "> 
      {shuffled}
    </div>
  )
}

export default Card