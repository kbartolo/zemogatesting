import React, { useState } from "react"
import Navbar from "components/Structure/Navbar"
import Header from "components/Structure/Header"
import Banner from "components/Structure/Banner"
import Suggestion from "components/Structure/Suggestion"
import Footer from "components/Structure/Footer"
import Dropdown from "components/Dropdown"
import WrapperCard from "components/WrapperCard"
import { useWindowSize } from "hooks/useWindowSize"
import "./styles.scss"

const Home = () => {
  const [selection, setSelection] = useState("")
  const handleSelection = (value) => {
    setSelection(value)
  }

  const width = useWindowSize()
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="max-centered">
        <Banner></Banner>
        <main role="main">
          <div className="home">
            <div className="home__wrapperDropdown">
              <h3>Previous Rulings</h3>
              {width > 560 && (
                <Dropdown handleSelection={handleSelection}></Dropdown>
              )}
            </div>
            <WrapperCard selectView={selection}></WrapperCard>
          </div>
        </main>
        <Suggestion></Suggestion>
        <hr />
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
