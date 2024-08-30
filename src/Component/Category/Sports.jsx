import React from 'react';
import { Link } from 'react-router-dom';
import useSports from './Sports.js';
import './Business.css'; 

function Sports(props) {
    // const { leftcard, rightcard, error } = useSports();

    if (props.error) {
        return <div>Error: {props.error}</div>;
    }

    return (
        <section className="container">
            <div className="site_content">
                <div className="post_content">
                    {props.leftcard.map((item, index) => (
                        <div key={index.id} className="post" style={{ overflow: 'hidden' }}>
                            <div>
                                <img src={item.urlToImage} alt="" />
                            </div>
                            <div className="post_info">
                                <span><i className="fa-solid fa-user"></i> {item.author}</span>
                                <span><i className="fa-solid fa-calendar-days"></i> {item.publishedAt}</span>
                                <span>{item.source.name}</span>
                            </div>
                            <div className="post_description">
                                <h4>{item.title}</h4>
                                <p>{item.content?.slice(0, 250)}</p>
                                <a className="text-light btn bg-primary p-2 border" href={item.url}>READ MORE</a>
                                <hr />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sidebar">
                    <h4>CATEGORY</h4>
                    <Link to='/home'><div className="right_bar"><span>HOME</span></div></Link>
                    <Link to='/business'><div className="right_bar"><span>BUSINESS</span></div></Link>
                    <Link to='/sports'><div className="right_bar"><span>SPORTS</span></div></Link>
                    <Link to='/politics'><div className="right_bar"><span>POLITICS</span></div></Link>
                    <Link to='/education'><div className="right_bar"><span>EDUCATION</span></div></Link>
                    <Link to='/entertainment'><div className="right_bar"><span>ENTERTAINMENT</span></div></Link>

                    <div className="right_bar_bottom_post">
                        <h4>POPULAR POST</h4>
                        {props.rightcard.map((item, index) => (
                            <div key={index.id} className="popular_post">
                                <div className="pp1" style={{ overflow: 'hidden' }}>
                                    <img src={item.urlToImage} alt="" />
                                </div>
                                <div className="right_bar_bottom_post_description">
                                    <span><i className="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;{item.publishedAt}</span>
                                    <span>{item.author}</span>
                                </div>
                                <p>{item.content?.slice(0, 250)}</p>
                            </div>
                        ))}
                        <div className="newsletter">
                            <h4>NEWSLETTER</h4>
                            <input type="email" name="email" id="email" placeholder="EMAIL" /><br />
                            <button className='m-2'>UPDATE!</button>
                        </div>
                        <div className="popular_tags">
                            <h4>POPULAR TAGS</h4>
                            <div className="tags">
                                <Link to='/home'><span>HOME</span></Link>
                                <Link to='/business'><span>BUSINESS</span></Link>
                                <Link to='/sports'><span>SPORTS</span></Link>
                                <Link to='/politics'><span>POLITICS</span></Link>
                                <Link to='/education'><span>EDUCATION</span></Link>
                                <Link to='/entertainment'><span>ENTERTAINMENT</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sports;
