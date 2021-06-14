
import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    //const categories = ['one Punch', 'samurai x', 'Dragon Ball']
    const [categories, setCategories] = useState(['one Punch'])

    // const handleAdd = () => {
    //     setcategories( cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>gifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map(category => 
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                )}
            </ol>
        </>
    )
}

export default GifExpertApp;
