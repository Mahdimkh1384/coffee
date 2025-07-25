import React from 'react'
import ReservationDetail from '@/Components/template/Reservation/ReservationDetail'
import PageHeader from '@/Components/modules/PageHeader/PageHeader'

export default function Reservation() {
    return (
        <>
        <PageHeader route = "Reservation"/>
            <ReservationDetail />
        </>
    )
}
