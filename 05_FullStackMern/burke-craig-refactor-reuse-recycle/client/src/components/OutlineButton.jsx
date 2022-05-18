import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, bs_color }) => {
  //   const onClick = e => {
  //     // console.log('clicked')
  //     // console.log(e)

  //   }

  return (
    <button
      onClick={onClick}
      className={`btn btn-outline-${bs_color} btn-sm`}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'green',
  text: 'Button',
  bs_color: 'primary'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
