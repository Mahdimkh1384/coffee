import PageHeader from '@/Components/modules/PageHeader/PageHeader'
import ContactDetail from "@/Components/template/Contact/ContactDetails"

export default function index() {
    return (
        <>
            <PageHeader route="Contact" />
            <ContactDetail />
        </>
    )
}
