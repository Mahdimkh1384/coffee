import React from 'react'
import PageHeader from '@/Components/modules/PageHeader/PageHeader'
import Comments from '@/Components/template/Testimonial/Comments'

export default function Testimonial({commentsData}) {
    return (
        <>
            <PageHeader route="Testimonial" />
            <Comments comments = {commentsData}/>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch("http://localhost:4000/comments")
    const data = await res.json()

    return{
        props:{
            commentsData :data
        },
        revalidate : 60 * 60 * 12
    }
}