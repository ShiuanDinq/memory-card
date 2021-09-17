const Score = (props) => {
  return(
    <div style={{display:"flex", justifyContent:"space-around"}}class="columns is-centered is-variable is-3-desktop">
      <div class="column is-one-quarter has-background-white">
        <p class="has-text-black is-size-5 has-text-centered">Score: <span class="has-text-danger">{props.score}</span></p>
      </div>
      <div class="column is-one-quarter has-background-white">
        <p class="has-text-black is-size-5 has-text-centered">High Score: <span class="has-text-info">{props.highScore}</span></p>
      </div>
    </div>


  )
}
export default Score