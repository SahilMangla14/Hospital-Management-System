import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Services from './Services'
const MainPage = () => {
    return (
        <>

            <div>
                    <NavBar />
                <div className='bg-[rgb(245,245,245)] sticky top-0'>
                    <Home />
                    <About />
                    <Services />
                </div>
            </div>


        </>
    )
}

export default MainPage
