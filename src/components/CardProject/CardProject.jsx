import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProject = ({title, text, site, repo, img}) => {
  return (
    <Card style={{ width: '35rem'}} className='px-0 border-0'>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      <div className='d-flex justify-content-center gap-5 '>
      <Button variant="dark" href={site} target='blank'>Ir al sitio</Button>
      <Button variant="dark" href={repo} target='blank'>Ver repositorio</Button>
      </div>
    </Card.Body>
  </Card>
  )
}

export default CardProject