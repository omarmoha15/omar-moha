import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> I have the ability to work with Microsoft technology like C# , ASP.NET CORE MCV ,Entity Framework,Microsoft Sql Server.
And front -end technology
like React js , React Nativ ,Html ,css ,tailwind..
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>.Net Core</li>
                                    <li>Entity Framework</li>
                                    <li>MS Sql Server</li>
                                    <li>RestFull APIs</li>
                                    <li>C#</li>
                                    <li>Git/Github</li>
                                    <li>PostMan</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>React Nativ</li>
                                    <li>Redux</li>
                                    <li>BootStrap</li>
                                    <li>Html/Css</li>
                                    <li>Tailwind</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage