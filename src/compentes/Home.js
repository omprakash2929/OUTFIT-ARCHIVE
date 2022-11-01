import React from 'react'
import Collection from './Collection';
import EndFoother from './EndFoother';
import Foother from './Foother';
import Herosection from './Herosection';
export default function Home() {
    return (
        <>
           <Herosection />
           <Collection/>
           <Foother />
           <EndFoother />
        </>
    )
}
