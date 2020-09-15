import React from 'react'

const year = new Date().getFullYear()

function Footer () {
  return <p>Copyright &copy; {year}</p>
}

export default Footer
