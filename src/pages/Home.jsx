import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"
import Nav from "../assets/components/Nav"
import Section from "../assets/components/Section"

import Main from "../assets/components/Main"

export default function Home() {
  return (
    
      <div className="home-content">
  <header><Header /></header>
    <nav><Nav /></nav>
    
    <main><Main /></main>

    <section><Section /></section>
    <footer><Footer /> </footer>
</div>
    
  )
}
