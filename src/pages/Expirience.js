import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import expirience from "../data/expirience"
import "../styles/Expirience.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkHistory } from "react-icons/md";


function Expirience() {
  return ( 
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper recommendation">
          <h1 className="title-recommendation">My Work Expirience</h1>
          <VerticalTimeline>
            {expirience.map( data => <VerticalElement data={data} />)}
        </VerticalTimeline>

        </main>
      </section>
      <SideBar />
    </section>
    <Footer />
  </body>
  );
}

const VerticalElement = ({ data }) => {
  return <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      // date={`${data.start.getYear()}-${(data.start.getMonth()+1)} to ${data.end ? data.end.getYear() + '-' + (data.end.getMonth()+1) : "present"}`}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<MdWorkHistory />}
      // icon={<WorkIcon />}
  >
      <h3 className="vertical-timeline-element-title">{data.position}</h3>
      <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
      <p>{data.description}</p>
      <i>{`${data.start.getFullYear()}-${(data.start.getMonth()+1)} to ${data.end ? data.end.getFullYear() + '-' + (data.end.getMonth()+1) : "present"}`}</i>
  </VerticalTimelineElement>
}

export default Expirience;