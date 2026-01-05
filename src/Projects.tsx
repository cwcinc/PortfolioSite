import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Projects() {
  return <>
    <h2 className="header-bar">Projects</h2>
    <div className="projects-container">
        <Card style={{ width: '50%' }}>
            <Card.Body>
                <Card.Title>PolyRanked</Card.Title>
                <Card.Text>
                    Full-stack competitive multiplayer platform using JavaScript, Node.js, and PostgreSQL.
                </Card.Text>
            </Card.Body>
            <a href="https://polyranked.cwcinc.dev/" target="_blank">
                <Card.Img variant="top" src="/PolyRanked.png" />
            </a>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>5,000+ active users</ListGroup.Item>
                <ListGroup.Item>Scalable cloud-native backend</ListGroup.Item>
                <ListGroup.Item>Real-time event processing and session management</ListGroup.Item>
                <ListGroup.Item>Established CI/CD practices and monitoring systems</ListGroup.Item>
                <ListGroup.Item>Managed PostgreSQL databases for persistent game state</ListGroup.Item>
                <ListGroup.Item>Applied distributed system design principles</ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
  </>;
}

export default Projects;