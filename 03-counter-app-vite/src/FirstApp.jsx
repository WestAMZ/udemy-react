
import PropTypes from 'prop-types'

export const FirstApp = ( { title, subTitle, name }) => {

  return (
    <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
    
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

// Default props entran antes que los propTypes es decir
// si no se pasó un valor pero se definió en defaultProps
// no tendremos error de propTypes
FirstApp.defaultProps = {
    title: 'No hay titulo',
    name: 'Fernando Herrera',
    subTitle: 'No hay subtitulo'
}