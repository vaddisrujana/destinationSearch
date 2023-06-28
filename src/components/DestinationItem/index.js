import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl, id} = destinationsList
  return (
    <li>
      <img src={imgUrl} className="img" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
