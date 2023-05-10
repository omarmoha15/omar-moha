import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import omar from '../../Assets/omar.png'
import alkobar from '../../Assets/alkobar.png'
import Ecommerce from '../../Assets/Ecommerce.png'
import swt from '../../Assets/swt.png'
import news from '../../Assets/news.PNG'



function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={omar}
                isBlog={false}
                title="Omar Protfolio"
                description="My portfolio project is a fast, responsive website built using ReactJS and Bootstrap. It features a minimalist design with a focus on content and user experience. The website showcases my skills and previous work, with a dedicated page for each project. It's optimized for speed and performance, making it easy to navigate and explore."
                ghLink="/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={alkobar}
                isBlog={false}
                title="Al-Khobar"
                description="Alkhobar website project is a responsive website built using ReactJS and Bootstrap. It features a modern and visually appealing design that showcases the beauty of Alkhobar city. The website offers visitors the opportunity to discover the city's landmarks, attractions, and activities. It's optimized for speed and performance, making it easy to navigate and explore."
                ghLink="https://al-khobar-om.onrender.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Ecommerce}
                isBlog={false}
                title="Ecommerce-Shop"
                description="My ecommerce website project is a fast and user-friendly shopping platform built using ReactJS and Redux. It features a sleek and modern design that enhances the shopping experience. The website allows users to easily browse and purchase products, with seamless payment and checkout processes. It's optimized for speed and performance, making it easy to use and manage."
                ghLink="https://ecommerce-omar.onrender.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={swt}
                isBlog={false}
                title="Ui Swt-Restrount"
                description="My SWT restaurant website project is a modern and visually appealing user interface built using ReactJS. It showcases the restaurant's menu and offers customers a glimpse into its ambiance. The website features a sleek design that enhances the customer experience. It's optimized for speed and performance, making it easy for customers to explore and interact with the restaurant's offerings."
                ghLink="https://github.com/omarmoha15/swt"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={news}
                isBlog={false}
                title="News App"
                description="My News mobile app project is a fast and intuitive platform built using React Native and Axios. It allows users to easily search and discover news articles from various sources. The app features a simple and user-friendly design that enhances the browsing experience. It's optimized for speed and performance, making it easy for users to stay up-to-date on the latest news."
                ghLink="https://github.com/omarmoha15/AppTask"
              />
            </Col>

        
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist