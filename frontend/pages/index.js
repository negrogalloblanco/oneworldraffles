import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>One World Raffle</title>
            </Head>
            <main>
                <h1>Welcome to One World Raffle</h1>
                <p>Buy tickets for a chance to win a Mercedes-Benz EQE 2025!</p>
            </main>
        </div>
    );
}
