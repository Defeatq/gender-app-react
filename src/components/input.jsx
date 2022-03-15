function Input(props) {
  return (
    <input type='text' placeholder='Type your name' onChange={props.handleChange} />
  )
}

export default Input