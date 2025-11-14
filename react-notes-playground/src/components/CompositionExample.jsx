import React from 'react'

function Header(){ return <header className="mb-2"><h3>Site Header</h3></header> }
function Footer(){ return <footer className="mt-2"><small>© 2025</small></footer> }

export default function CompositionExample(){
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">Composition Example</h2>
      <div className="mt-2">
        <Header />
        <p>Main content composed of smaller components.</p>
        <Footer />
      </div>
    </div>
  )
}
