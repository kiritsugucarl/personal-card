import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import '../assets/styles/Footer.css'

export default function Footer(){
    return(
        <footer>
            <a href="#"><img className="footer--icon" src={twitter} /></a>
            <a href="#"><img className="footer--icon" src={facebook} /></a>
            <a href="#"><img className="footer--icon" src={instagram} /></a>
            <a href="#"><img className="footer--icon" src={github} /></a>
        </footer>
    )
}