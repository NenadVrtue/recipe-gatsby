import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import Layout from '../components/layout'
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

const Home = () => {
    return (
        <Layout>
            <SEO title="Home Page"  />
            <main className="page">
                <header className="hero">
                    <StaticImage 
                    src="../assets/images/main.jpeg" 
                    alt="eggs"
                    className="hero-img"
                    placeholder="tracedSVG"
                    layout="fullWidth"/>
                    <div className="hero-container">
                        <div className="hero-text">
                            <h1>Simply Recepes</h1>
                            <p>No Fluff, Just Recipes</p>
                        </div>
                    </div>
                </header>
               <AllRecipes />

            </main>
            
        </Layout>
    )
}


export default Home
