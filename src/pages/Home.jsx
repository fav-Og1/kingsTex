import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"

import Section from "../assets/components/Section"

import Main from "../assets/components/Main"
import Library from "../assets/components/Library"

export default function Home() {
  return (
    
      <div className="home-content">
  <header><Header /></header>
    
    <div className="library"><Library /></div>
    <main><Main /></main>

    <section><Section /></section>
    <footer><Footer /> </footer>
</div>
    
  )
}
