import { useEffect, useState, useRef } from "react";
import { conferencesArrayType, navListArrayType, newsArrayType, publicationsArrayType } from "../models/types";
import "../styles/home.css";
import { navListArray } from "../utils/nav-list-array";
import { publicationsArray } from "../utils/publications-list-array";
import { conferencesArray } from "../utils/publications-list-array";
import { newsArray } from "../utils/publications-list-array";
import Hamburger from "./hamburger";




const Home = () => {

    let publications: publicationsArrayType = publicationsArray;
    let conferences: conferencesArrayType = conferencesArray;
    let news: newsArrayType = newsArray;
    let navList: navListArrayType = navListArray;
    
    const container = useRef<HTMLDivElement | null>(null)

    const [scroll, setScroll] = useState<number>(0);
   
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)
    

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    
    useEffect(() => {
        container.current?.addEventListener( 'scroll',() => {
            const currentScroll = container.current?.scrollTop
            setScroll(currentScroll ?? 0)
        
        })
    },[])

    const scrolling = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: 'smooth'});
    }

    const clickHandler = (element: string) => {
        if(hamburgerOpen === true){
            setHamburgerOpen(false)
            
        }
        scrolling(element)
    }

    /*const returnToTop = () => {
        if(scroll > 0){
            container.current?.scrollTo({top: 0, behavior: 'smooth'});
        }
    }*/
   
    return (
      <div className="main">
        <header  id="header" className= {scroll > 0 ? "home-header stick-header" : "home-header"}>
            <h1 style={{color: 'white', fontSize: '3rem'}}>Jimena Zapata</h1>
            <div className= "normal-menu" >
                <ul className="menu">
                    {navList.map((element)=>
                        <li className="sections-buttons"><button  onClick={()=> scrolling(element.id)}  className="nav-buttons">{element.name}</button></li>
                    )}
                </ul>
            </div>
            <div className= "burger-menu" >
                <div className="hamburger" onClick={() => {toggleHamburger()}}>
                    <Hamburger />
                </div>
                   
            </div>
        </header>
        <div className="burger-menu nav-burger">
            <div className={hamburgerOpen ? "burger-inline" : "burger-none"} >
                <ul>
                    {navList.map((element)=>
                        <li className="sections-buttons"><button onClick={()=> clickHandler(element.id)} className="nav-buttons">{element.name}</button></li>
                    )}
                </ul>
            </div>
        </div>
        <div ref={container} className="all-sections">
            <section id="about" className="about-section">
                <h2>About</h2>
                <div className="about-content-div">
                    <img className="photo-about" src="/images/Jimena-Zapata-e1590667874345-768x768.jpg" alt="woman photo" />
                    <div className="text-about">
                        <p>
                            My name is Jimena Zapata. I am a practising lawyer and a doctoral researcher in a Cotutele bi-national program between the Ludwig-Maximilian University of Munich (LMU, Germany) and the University of Granada (UGR, Spain).
                            My research lies at the intersection of the Philosophy of Mind & Language and Moral Psychology. I work at the Cognition, Values and Behaviour Research Group (CVBE) under the supervision of Prof Ophelia Deroy and Prof Neftalí Villanueva.
                        </p>
                    </div>
                </div>
                <div className="text-interestings">
                    <h3>I'm interest on: </h3>
                    <p >
                        Philosophy of Mind | Social and Political Philosophy of Language | Hate Speech | Experimental Philosophy | Experimental Jurisprudence | Social Ontology | Moral Psychology | Public Policies | Philosophy of Law
                    </p>
                </div>
                {/*<img onClick={()=> returnToTop()} style={{height: 80, width: 80, cursor: 'pointer'}} src="/images/up-arrow.png" alt="up-arrow" />*/}
            </section>
           
            <section id="projects" className="proyects-section">
                <h2>Work and Projects</h2>
                <div className="work">
                    <div className="work-div">
                        <h3 className="today-work-text">I'm working on:</h3>
                        <p className="today-work-text">
                            I am currently examining how bystanders’ responses to a hate speech incident affect one of its core dimensions: the public perception of the harm it causes to victims and society. By using experimental methods from the cognitive sciences, I explore whether ordinary citizens perceive hate speech incidents as more harmful when they occur in front of silent, passive bystanders, whether they find a voicing-opposition response helpful in reducing the harm and whether a collective opposition reduces the damage better than an individual.
                        </p>
                        <h3 className="previously-work-text">I have worked on:</h3>
                        <p className="previously-work-text">
                            Looking at the high proportion of underreported hate speech attacks and the relatively few cases that end with sanctions, my previous work explored whether that apparent leniency towards speech harm was ingrained in our moral dispositions, making us evaluate the damage caused by words as less harmful and worthy of punishment and denunciation than that caused by (physical) acts when both stem from identical hateful intent and create same consequences for the victims. In a Pre-Registered Report (N=1309), we contradicted that possibility: participants consistently rated verbal hate attacks as more deserving of punishment and denunciation and more harmful to the victims than nonverbal attacks. We explain this difference by the concept of action aversion, suggesting that ordinary citizens have different intrinsic associations with interactions involving words compared to bodily actions regardless of consequences.

                            Before that, I obtained a Master in Logic and Philosophy of Science (UGR, Spain), writing a thesis titled “The Context-Dependence of the Normative Terms in Spanish Supreme Court Judgments”. 

                            I have worked as a practising lawyer for over fifteen years.
                        </p>
                    </div>
                </div>
                <div className="proyects">
                    <div className="cvbe-container">
                        <h3>CVBE Projects</h3>
                        <img className="logo-img" src="/images/CUBE-Logo.jpg" alt="logo CVBE" />
                    </div>
                    <div className="proyect-description">
                        <h4>Assessing Hate Speech Harm</h4>
                        <p>
                            This project investigates how bystanders’ responses to a hate speech incident affect one of its core dimensions: 
                            the public perception of the harm it causes to victims and society.
                        </p>
                    </div>
                    {/*<img onClick={()=> returnToTop()} style={{height: 80, width: 80, cursor: 'pointer'}} src="/images/up-arrow.png" alt="up-arrow" />*/}
                </div>
            </section>
                
            <section id="publications" className="publications-section">
                <h2>Publications</h2>
                <h3 className="publications-title">Peer reviewed articles:</h3>
                <div  className="publications-list">
                    <ul>
                        {publications.map((publication)=>
                            <li style={{listStyle: 'none'}}><p>{publication.text}</p></li>
                        )}
                    </ul>
                </div>
                <h3 className="publications-title">Conference Talks & Posters</h3>
                <div  className="conferences-list">
                    <ul>
                        {conferences.map((conference)=>
                            <li style={{listStyle: 'none'}}><p>{conference.text}</p></li>
                        )}
                    </ul>
                </div>
                <h3 className="publications-title">News</h3>
                <ul className="news-list">
                    {news.map((text)=>
                        <li style={{listStyle: 'none'}}><p>{text.text}</p></li>
                    )}
                </ul>
                {/*<img onClick={()=> returnToTop()} style={{height: 80, width: 80, cursor: 'pointer'}} src="/images/up-arrow.png" alt="up-arrow" />*/}
            </section>
            <section id="science">
                <h2>Science Communication</h2>
            </section>
            <section id="more">
                <h2>More</h2>
            </section>
            <footer id="contact" className="footer">
                <h2>Contact</h2>
                <p>email</p>
                <p> social media</p>
                <p>...</p>
                {/*<img onClick={()=> returnToTop()} style={{height: 80, width: 80, cursor: 'pointer'}} src="/images/up-arrow.png" alt="up-arrow" />*/}
            </footer>   
        </div>
      </div>
    )
  }
  
  export default Home