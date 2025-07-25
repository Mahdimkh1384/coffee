import React from 'react'
import PageHeader from '@/Components/modules/PageHeader/PageHeader'
import Result from '@/Components/template/Search/Result'

export default function Search({dataResult}) {
    return (
        <>
            <PageHeader route="Search"/>
            <Result data = {dataResult}/>
        </>
    )
}

export async function getServerSideProps(context){
    const {query} = context
    const res = await fetch("http://localhost:4000/menu")
    const data = await res.json()

    const searchResult = data.filter(item => item.type.toLowerCase().includes(query.q.toLowerCase()) || item.title.toLowerCase().includes(query.q.toLowerCase()))

    return{
        props:{
            dataResult : searchResult,
        }
    }
}