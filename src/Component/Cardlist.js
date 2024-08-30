// // 


// // Cardlist.js
// import { useState, useEffect } from 'react';
// import allNews from './APIs/Allnews.json'; // Adjust the import path if necessary

// const shuffleArray = (array) => {
//     if (!Array.isArray(array)) {
//         return [];
//     }
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// };

// const Cardlist = () => {
//     const [posts, setPosts] = useState([]);
//     const [carouselItems, setCarouselItems] = useState([]);
//     const [cards, setCards] = useState([]);
//     const [leftContainers, setLeftContainers] = useState([]);
//     const [rightContainers, setRightContainers] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         try {
//             const fetchedPosts = allNews.articles;
//             if (!Array.isArray(fetchedPosts)) {
//                 throw new Error('Data is not an array');
//             }
//             const shuffledPosts = shuffleArray(fetchedPosts);
//             setPosts(shuffledPosts);
//             setCarouselItems(shuffledPosts.slice(0, 3));
//             setCards(shuffledPosts.slice(3, 5));
//             setLeftContainers(shuffledPosts.slice(5, 10));
//             setRightContainers(shuffledPosts.slice(10, 15));
//         } catch (error) {
//             setError('Error fetching data');
//             console.error(error);
//         }
//     }, []);

//     return { posts, carouselItems, cards, leftContainers, rightContainers, error };
// };

// export default Cardlist;

import { useEffect, useState } from 'react';
import axios from 'axios';

const Cardlist = () => {
    const [carouselItems, setCarouselItems] = useState([]);
    const [cards, setCards] = useState([]);
    const [leftContainers, setLeftContainers] = useState([]);
    const [rightContainers, setRightContainers] = useState([]);
    const [error, setError] = useState(null);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Add a cache-busting parameter to ensure fresh data
                const cacheBuster = new Date().getTime();
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b7960abe6a064a35b8aab97636f707bf&cacheBuster=${cacheBuster}`);
                const articles = shuffleArray(response.data.articles);

                // Example logic to distribute articles into different categories
                setCarouselItems(articles.slice(0, 5));
                setCards(articles.slice(5, 8));
                setLeftContainers(articles.slice(9, 15));
                setRightContainers(articles.slice(16, 19));
            } catch (error) {
                setError('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    return { carouselItems, cards, leftContainers, rightContainers, error };
};

export default Cardlist;
