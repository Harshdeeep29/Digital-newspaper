// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7960abe6a064a35b8aab97636f707bf


import { useEffect, useState } from 'react';
import axios from 'axios';
import Business from './Business.jsx';

const useSports = () => {
    const [leftcard, setLeftcard] = useState([]);
    const [rightcard, setRightcard] = useState([]);
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
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7960abe6a064a35b8aab97636f707bf');
                const articles = shuffleArray(response.data.articles);
                setLeftcard(articles.slice(0, 4));
                setRightcard(articles.slice(4, 10));
            } catch (error) {
                setError('Failed to fetch data');
            }
        };
        fetchData();
    }, []);

    return ( <>
    <Business leftcard={leftcard}
    rightcard={rightcard}
    error={error}
    />
    </> );
};
export default useSports;
