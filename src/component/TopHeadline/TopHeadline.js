import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bdfbb06716ac43ea8c1896be8ffa4a01')
        .then(Response => Response.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            {/* <h1>Top Headlines:{articles.length}</h1> */}
           
            {
                articles.map(article => <News article ={article}></News>)
            };
        </div>
    );
};

export default TopHeadline;