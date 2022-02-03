import { FaQuestion } from 'react-icons/fa'
// Link brought in to not have the page refresh
import { Link } from 'react-router-dom'

function AboutIconLink() {
    // any internal links u want to use Link to =""
  return (
    <div className='about-link'>
        
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
