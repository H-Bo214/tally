const Button = ({ name, className, onClick, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {name}
    </button>
  )
}

export default Button
