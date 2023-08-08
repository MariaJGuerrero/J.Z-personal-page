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
            <section className="proyects-section"></section>
            <div className="work">
                <h2>Work and Proyects</h2>
                <div>
                    <h3 className="previously-work-text">I have worked on:</h3>
                    <p className="previously-work-text">
                        Looking at the high proportion of underreported hate speech attacks and the relatively few cases that end with sanctions, my previous work explored whether that apparent leniency towards speech harm was ingrained in our moral dispositions, making us evaluate the damage caused by words as less harmful and worthy of punishment and denunciation than that caused by (physical) acts when both stem from identical hateful intent and create same consequences for the victims. In a Pre-Registered Report (N=1309), we contradicted that possibility: participants consistently rated verbal hate attacks as more deserving of punishment and denunciation and more harmful to the victims than nonverbal attacks. We explain this difference by the concept of action aversion, suggesting that ordinary citizens have different intrinsic associations with interactions involving words compared to bodily actions regardless of consequences.

                        Before that, I obtained a Master in Logic and Philosophy of Science (UGR, Spain), writing a thesis titled “The Context-Dependence of the Normative Terms in Spanish Supreme Court Judgments”. 

                        I have worked as a practising lawyer for over fifteen years.
                    </p>
                    <h3 className="today-work-text">I'm workin on:</h3>
                    <p className="today-work-text">
                        I am currently examining how bystanders’ responses to a hate speech incident affect one of its core dimensions: the public perception of the harm it causes to victims and society. By using experimental methods from the cognitive sciences, I explore whether ordinary citizens perceive hate speech incidents as more harmful when they occur in front of silent, passive bystanders, whether they find a voicing-opposition response helpful in reducing the harm and whether a collective opposition reduces the damage better than an individual.
                    </p>
                </div>
            </div>
                <div className="proyects">
                    <div className="logo">
                        <h3>CVBE Projects</h3>
                        <img className="logo-img" src="/images/CUBE-Logo.jpg" alt="logo CVBE" />
                    </div>
                    <div className="proyect-description">
                        <h3>Assessing Hate Speech Harm</h3>
                        <p>
                            This project investigates how bystanders’ responses to a hate speech incident affect one of its core dimensions: 
                            the public perception of the harm it causes to victims and society.
                        </p>
                    </div>
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