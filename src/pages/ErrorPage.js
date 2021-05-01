import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <div>
        {' '}
        <h1>404</h1>
        <h3>sorry this page is not found </h3>
        <button className='btn'>
          <Link to='/'>Go Back Home</Link>
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  a {
    color: white;
  }
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
