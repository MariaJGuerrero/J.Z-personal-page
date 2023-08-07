import { conferencesArrayType, newsArrayType, publicationsArrayType } from "../models/types";
import "../styles/home.css";
import { publicationsArray } from "../utils/publications-list-array";
import { conferencesArray } from "../utils/publications-list-array";
import { newsArray } from "../utils/publications-list-array";

function Home() {

    let publications: publicationsArrayType = publicationsArray;
    let conferences: conferencesArrayType = conferencesArray;
    let news: newsArrayType = newsArray;


    return (
      <div>
        <header className="home-header-large-view">
            <div className="intro">
                <ul>
                    <li className="sections-buttons"><button className="nav-buttons">About me</button></li>
                    <li className="sections-buttons"><button className="nav-buttons">Publications</button></li>
                    <li className="sections-buttons"><button className="nav-buttons">Proyects</button></li>
                    <li className="sections-buttons"><button className="nav-buttons">Contact</button></li>
                </ul>
            </div>
        </header>
        <main>
            <section className="about-section">
                <h2>About me</h2>
                <div className="about-content-div">
                    <img className="photo-about" src="/images/Jimena-Zapata-e1590667874345-768x768.jpg" alt="woman photo" />
                    <div className="text-about">
                        <p>
                            My name is Jimena Zapata. I am a practising lawyer and a doctoral researcher in a Cotutele bi-national program between the Ludwig-Maximilian University of Munich (LMU, Germany) and the University of Granada (UGR, Spain).
                            My research lies at the intersection of the Philosophy of Mind & Language and Moral Psychology. I work at the Cognition, Values and Behaviour Research Group (CVBE) under the supervision of Prof Ophelia Deroy and Prof Neftalí Villanueva.
                        </p>
                    </div>
                </div>
                <p className="text-interestings">
                    <span style={{fontWeight: 'bold'}}>I'm interest on: </span>
                            Philosophy of Mind | Social and Political Philosophy of Language | Hate Speech | Experimental Philosophy | Experimental Jurisprudence | Social Ontology | Moral Psychology | Public Policies | Philosophy of Law
                </p>
            </section>
            <section className="publications-section">
                <h2>Publications</h2>
                <h3>Peer reviewed articles:</h3>
                <ul className="publications-list">
                    {publications.map((publication)=>
                        <li style={{listStyle: 'none'}}><p>{publication.text}</p></li>
                    )}
                </ul>
                <h3>Conference Talks & Posters</h3>
                <ul className="conferences-list">
                    {conferences.map((conference)=>
                        <li style={{listStyle: 'none'}}><p>{conference.text}</p></li>
                    )}
                </ul>
                <h3>News</h3>
                <ul className="news-list">
                    {news.map((text)=>
                        <li style={{listStyle: 'none'}}><p>{text.text}</p></li>
                    )}
                </ul>
            </section>
            <section className="proyects"></section>
                <h2>Proyects</h2>
                <p>CVBE Projects</p>
                <div>
                    <img src="/images/CUBE-logo.jpg" alt="logo CVBE" />
                    <h3>Assessing Hate Speech Harm</h3>
                    <p>
                        This project investigates how bystanders’ responses to a hate speech incident affect one of its core dimensions: 
                        the public perception of the harm it causes to victims and society.</p>
                </div>
            <section className="contact"></section>
                <h2>Contact me</h2>
                <p>email</p>
                <p> social media</p>
                <p>...</p>
        </main>
      </div>
    )
  }
  
  export default Home