import React from 'react'

const Head = ({ title }) => {
  return (
    <>
      <html lang="en" />

      {/* <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} /> */}

      <meta property="og:title" content="Esther Mureithi" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

     
    </>
  )
}

export default Head