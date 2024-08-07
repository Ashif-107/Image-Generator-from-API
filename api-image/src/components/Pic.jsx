import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pic = () => {
    const { id } = useParams();
    const [urlsToDisplay, setUrlsToDisplay] = useState([]);

    useEffect(() => {


        // Link to Unsplash Search API Documentation: https://unsplash.com/documentation#search-photos
        async function getUnsplashPhotos() {
            try {

                var apiKey = 'UJkjBUfFZ94SsLlS2UpR_Mvkmop7ZafEDOY_GWPiS4A';

                let resp = await axios.get(`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${id}&per_page=6`);
                console.log(21, resp.data.results);
                //store the array of results into urlsToDisplay variable
                setUrlsToDisplay(resp.data.results);
            } catch (e) {
                console.log(e);
            }

        }
        getUnsplashPhotos();

    }, [id]);

    return (
        <div className="bg-[#6495ED] h-[100vh] flex justify-center items-center p-9">
            <div className="text-center">
                <h1 className="text-4xl mb-4">Here are your pictures</h1>
                {urlsToDisplay.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
                        {urlsToDisplay.map((image) => (
                            <div key={image.id} className="flex justify-center items-center p-2">
                                <img
                                    src={image.urls.small}
                                    alt={image.alt_description || 'Image'}
                                    className="w-full h-[250px] object-cover border border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-2xl text-black m-10">No picture found</p>
                )}
            </div>
        </div>
    );
};

export default Pic;
