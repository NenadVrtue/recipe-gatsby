import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'

const Error = () => {
    return (
        <Layout>
            <SEO title="Error" />
            <main className="error-page">
                <section>
                    <h1>404</h1>
                    <h3>page not found</h3>
                </section>
            </main>
           
        </Layout>
    )
}

export default Error
