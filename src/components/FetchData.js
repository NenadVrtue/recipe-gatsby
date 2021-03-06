import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'

const getData = graphql`
{
  site {
    
    info:siteMetadata {
      author
      complexData {
        age
        name
      }
      description
      person {
        age
        name
      }
      simpleData
      title
    }
  }
}

`

const FetchData = () => {
    const {site:{info:{title}}} = useStaticQuery(getData);
   
    return (
        <div>
            <h2>Site title is {title}</h2>
        </div>
    )
}

export default FetchData
