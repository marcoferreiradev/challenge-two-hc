import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button';

function ButtonLink({url, children, type}) {
  return (
    <Button as={Link} to={url} type={type} primary>
      {children}
    </Button>
  )
}

export default ButtonLink;

