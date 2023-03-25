import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Contents</title>
            </Head>

            <header>
                <h1>Contents</h1>
            </header>
            <>
                <div style = {{display: "flex", flexDirection: "row", gap: "1rem"}}>  
                    <Link href = "/api/authors">
                        <button type = "button" class = "btn btn-primary">Authors API</button>
                    </Link>
                    <Link href = "/api/books">
                        <button type = "button" class = "btn btn-primary">Books API</button>
                    </Link>
                    <Link href = "/api/customers">
                        <button type = "button" class = "btn btn-primary">Customers API</button>
                    </Link>
                </div>
            </>
        </>
    )
}