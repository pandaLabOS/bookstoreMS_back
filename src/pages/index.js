import * as React from 'react'

import { Books } from "@/data/bookData.json"

export default function Home() {
    console.log(JSON.stringify(Books[0]))
    return (
        <div>
            {JSON.stringify(Books[0])}
        </div>
    )
}

function getServerSideProps() {
    return {
        
    }
}