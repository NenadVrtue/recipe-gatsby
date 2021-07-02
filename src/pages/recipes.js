import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import AllRecipes from '../components/AllRecipes'

const Recipes = () => {
    return (
        <Layout>
            <SEO title="recipes"/>
        <main className="page">
           <AllRecipes />
           </main>
        </Layout>
    )
}

export default Recipes
