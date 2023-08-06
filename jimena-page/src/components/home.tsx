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
            <div>
                <ul>
                    <li className="sections-buttons"><button>About me</button></li>
                    <li className="sections-buttons"><button>Publications</button></li>
                    <li className="sections-buttons"><button>Proyects</button></li>
                    <li className="sections-buttons"><button>Contact</button></li>
                </ul>
            </div>
        </header>
        <main>
            <section className="about-section">
                <img className="photo-about" src="/images/Jimena-Zapata-e1590667874345-768x768.jpg" alt="woman photo" />
                <div className="text-about">
                    <p>
                        My name is Jimena Zapata. I am a practising lawyer and a doctoral researcher in a Cotutele bi-national program between the Ludwig-Maximilian University of Munich (LMU, Germany) and the University of Granada (UGR, Spain).
                         My research lies at the intersection of the Philosophy of Mind & Language and Moral Psychology. I work at the Cognition, Values and Behaviour Research Group (CVBE) under the supervision of Prof Ophelia Deroy and Prof Neftalí Villanueva.
                    </p>
                    <p>
                        <span style={{fontSize: 'bold'}}>I'm interest on: </span>
                        Philosophy of Mind | Social and Political Philosophy of Language | Hate Speech | Experimental Philosophy | Experimental Jurisprudence | Social Ontology | Moral Psychology | Public Policies | Philosophy of Law
                    </p>
                </div>
            </section>
            <section className="publications-section">
                <h3>Peer reviewed articles:</h3>
                <ul>
                    {publications.map((publication)=>
                        <li style={{listStyle: 'none'}}><p>{publication.text}</p></li>
                    )}
                </ul>
                <h3>Conference Talks & Posters</h3>
                <ul>
                    {conferences.map((conference)=>
                        <li style={{listStyle: 'none'}}><p>{conference.text}</p></li>
                    )}
                </ul>
                <h3>News</h3>
                <ul>
                    {news.map((text)=>
                        <li style={{listStyle: 'none'}}><p>{text.text}</p></li>
                    )}
                </ul>
            </section>
            <section className="proyects"></section>
            <section className="contact"></section>
        </main>
      </div>
    )
  }
  
  export default Home