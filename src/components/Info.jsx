import profile from '../assets/profile.jpg'
import '../assets/styles/Info.css'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'

export default function Info(){
    return(
        <header>
            <img className="info--image" src={profile} />
            <h1>Carl Dennis Pineda</h1>
            <p>Frontend Developer</p>
            <small>cdbpineda.website</small> <br />
            <div className ="links">
                <a className="emailLink" href="#"><img className ="links--icon" src={email}/>Email</a>
                <a className="linkedInLink" href="#"><img className="links--icon" src={linkedin} />LinkedIn</a>
            </div>
        </header>
    )
}