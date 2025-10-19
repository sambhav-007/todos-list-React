import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: '70vh',
    width: "100%",
    border: "5px solid red"
  }
  return (
    <footer className="bg-dark text-light py-3 " style={footerStyle}>
      <p className="text-center">
        Copyright &copy; Mytodoslist.com
      </p>
      
    </footer>
  )
}

export default Footer
