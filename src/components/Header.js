import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = ( {title, onAdd, showAdd} ) => {

    const locatoin = useLocation()
    
    return (
        <header className='header'>
            <h1>{title} </h1>
       { locatoin.pathname === '/' && 
       (<Button color={showAdd ? '#0F6FD1': '#477EB6'} 
          text={showAdd ? 'Close': 'Add'} 
          onClick = {onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
        title: 'Task Tracker'
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header
