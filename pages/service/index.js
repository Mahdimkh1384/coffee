import PageHeader from '@/Components/modules/PageHeader/PageHeader'
import React from 'react'
import ServicesDetails from '@/Components/template/Services/ServicesDetails'

export default function index({services}) {
    return (
        <>
            <PageHeader route="Services" />
            <ServicesDetails data = {services}/>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:4000/services")
    const data = await res.json()

    return {
        props: {
            services : data
        }
    }
}