import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

const GifGrid = ({ category }) => {

       const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid" >
                {
                    images.map(img => (
                        <GiftGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;









//     const getGifs = async () => {

//         const url = 'https://api.giphy.com/v1/gifs/search?api_key=CRDkfH94Cb9rwU2nfkV4xh2Kwndt78Mo&q=Rick and Marty&limit=10'

//         const resp = await fetch(url)
//         const { data } = await resp.json();

//         const gifs = data.map(img => {
//             return {
//                 id: img.id,
//                 title: img.title,
//                 url: img.images?.downsized_medium.url
//             }
//         })

//         console.log(gifs)
//     }

//     getGifs();
//     const GifGrid = ({ category }) => {
//         return (
//             <div>
//                 <h3>{category}</h3>
//             </div>
//         )
//     }

// }

// export default GifGrid;