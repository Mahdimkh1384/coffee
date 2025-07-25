import PageHeader from '@/Components/modules/PageHeader/PageHeader'
import React from 'react'
import Pricing from '@/Components/template/Menu/Pricing'

export default function index({menuData}) {
    return (
        <>
            <PageHeader route="Menu" />
            <Pricing data = {menuData}/>
        </>
    )
}


export async function getStaticProps() {
    const res = await fetch("http://localhost:4000/menu")
    const data = await res.json()

    return {
        props: {
            menuData : data,
        },
        revalidate: 60 * 60 * 12
    }
}