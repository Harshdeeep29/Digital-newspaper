// import React, { useEffect, useState } from 'react'
// import './Card-body.css'
// import axios from 'axios';

// const Cardbody = () => {

//     const [news,setNews]= useState([]);
//     useEffect(()=>{
//         axios.get("https://dummyjson.com/posts").then((response)=>{
//             console.log(response);
//             setNews(response.data.posts)
            
//         })
//     },[])
    

//     return (

//         // <div className="container">
//         //     <div className="row">
//         //         <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
//         //             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         //                 <ol className="carousel-indicators">
//         //                     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//         //                     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//         //                     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         //                 </ol>
//         //                 <div className="carousel-inner">
//         //                     <div className="carousel-item active border p-2">
//         //                         <img src="https://enwpgo.files.wordpress.com/2023/08/news-website-header.jpg" className="d-block w-100" alt="..." />
//         //                         <div className="details">
//         //                             <h2>{news.title}</h2>
//         //                             <h5></h5>
//         //                         </div>
//         //                     </div>
//         //                     <div className="carousel-item border p-2">
//         //                         <img src="https://www.financialexpress.com/wp-content/uploads/2024/06/NEET-protests-PTI.jpg?w=310&h=174&crop=1" className="d-block w-100" alt="..." />
//         //                         <div className="details">
//         //                             <h2>Lorem ipsum dolor sit amet.</h2>
//         //                             <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga beatae quae aliquam!</h5>
//         //                         </div>
//         //                     </div>
//         //                     <div className="carousel-item border p-2">
//         //                         <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2024/06/18/223105422669f46fa0757cd5b2a98dce1718689533800575_original.PNG?impolicy=abp_cdn&imwidth=470" className="d-block w-100" alt="..." />
//         //                         <div className="details">
//         //                             <h2>Lorem ipsum dolor sit amet.</h2>
//         //                             <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga beatae quae aliquam!</h5>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //                 <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
//         //                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         //                     <span className="sr-only">Previous</span>
//         //                 </button>
//         //                 <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
//         //                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         //                     <span className="sr-only">Next</span>
//         //                 </button>
//         //             </div>
//         //         </div>
//         //         <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
//         //             <div className="card p-1" style={{ width: "18rem" }}>
//         //                 <img src="https://i.ytimg.com/vi/c4VCRSkk3wc/maxresdefault.jpg" className="card-img-top" alt="..." />
//         //                 <div className="card-body">
//         //                     <h6 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
//         //                 </div>
//         //             </div>
//         //             <div className="card p-1 mt-3" style={{ width: "18rem" }}>
//         //                 <img src="https://i.ytimg.com/vi/c4VCRSkk3wc/maxresdefault.jpg" className="card-img-top" alt="..." />
//         //                 <div className="card-body">
//         //                     <h6 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
//         //                 </div>
//         //             </div>
//         //         </div>

//         //     </div><hr />
//         //     <div className="row border p-1">
//         //         <div className="col-xl-4 col-lg-4 col-md-6 border-right">
//         //             <div className="card" style={{ width: "18rem;" }}>
//         //                 <img src="https://im.rediff.com/240-170/news/2024/jun/18kanchanjunga-express-crash1.jpg" className="card-img-top" alt="..." />
//         //                 <div className="card-body">
//         //                     <h6 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
//         //                     <a href="#" className="btn btn-primary">Detail</a>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //         <div className="col-xl-4 col-lg-4 col-md-6 border-right">
//         //             <div className="card" style={{ width: "18rem;" }}>
//         //                 <img src="https://im.rediff.com/240-170/news/2024/jun/18kanchanjunga-express-crash1.jpg" className="card-img-top" alt="..." />
//         //                 <div className="card-body">
//         //                     <h6 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
//         //                     <a href="#" className="btn btn-primary">Detail</a>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //         <div className="col-xl-4 col-lg-4 col-md-12">
//         //             <div className="card" style={{ width: "18rem;" }}>
//         //                 <img src="https://im.rediff.com/240-170/news/2024/jun/18kanchanjunga-express-crash1.jpg" className="card-img-top" alt="..." />
//         //                 <div className="card-body">
//         //                     <h6 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
//         //                     <a href="#" className="btn btn-primary">Detail</a>
//         //                 </div>
//         //             </div>
//         //         </div>

//         //     </div>
//         //     <hr />

//         //     {/* new element  */}
//         //     <div className="row container3">
//         //         <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">

//         //             <div className="left-container">
//         //                 <div className="card mb-3" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4 col-sm-4 col-xl-4 col-lg-4">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8 col-sm-8 col-xl-8 col-lg-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //             <div className="left-container">
//         //                 <div className="card mb-3" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>

//         //             <div className="left-container">
//         //                 <div className="card mb-3" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //             <div className="left-container">
//         //                 <div className="card mb-3" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //             <div className="left-container">
//         //                 <div className="card mb-3" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
//         //             <div className="right-container">
//         //                 <div className="card mb-3 p-1" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4 ">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //                 <div className="card mb-3 p-1" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4 ">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //                 <div className="card mb-3 p-1" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4 ">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //                 <div className="card mb-3 p-1" style={{ maxwidth: "540px;" }}>
//         //                     <div className="row no-gutters">
//         //                         <div className="col-md-4 ">
//         //                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrDMp8F2mYdqcTDvMGQ_vymuFElQ6hwgmgw&usqp=CAU" alt="..." />
//         //                         </div>
//         //                         <div className="col-md-8">
//         //                             <div className="card-body">
//         //                                 <h5 className="card-title">Card title</h5>
//         //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                 </div>

//         //             </div>
//         //         </div>

//         //     </div>
//         // </div>
//         <div>
//             {news.map((data)=>{
//                 return(
//                     <div>{data.title}</div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Cardbody
import React from 'react';
import './Card-body.css';
import Cardlist from './Cardlist';

const Cardbody = () => {
    const { carouselItems, cards, leftContainers, rightContainers, error } = Cardlist();

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 mb-3">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {carouselItems?.map((item, index) => (
                                <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                            ))}
                        </ol>
                        <div className="carousel-inner">
                            {carouselItems?.map((item, index) => (
                                <div key={item.url} className={`carousel-item ${index === 0 ? 'active' : ''} border p-2`}>
                                    <img src={item.urlToImage} className="d-block w-100" alt={item.title} />
                                    <div className="details">
                                        <h2>{item.title}</h2>
                                        <p>{item.description?.slice(0, 250)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
                    {cards?.map((card) => (
                        <div key={card.url} className="card p-1 mt-3" style={{ width: "100%" }}>
                            <img src={card.urlToImage} className="card-img-top" alt={card.title} />
                            <div className="card-body">
                                <h6 className="card-text">{card.title?.slice(0, 118)}</h6>
                                <p>{card.description?.slice(0, 250)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="row border p-1">
                {leftContainers?.map((item) => (
                    <div key={item.url} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 border-right p-2 mb-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h6 className="card-text">{item.title}</h6>
                                <p>{item.description?.slice(0, 250)}</p>
                                <a href={item.url} className="btn btn-primary">Detail</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <div className="row container3">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 mb-3">
                    {leftContainers?.map((item) => (
                        <div key={item.url} className="left-container mb-3">
                            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title?.slice(0, 50)}</h5>
                                            <p className="card-text">{item.description?.slice(0, 250)}</p>
                                            <p className="card-text"><small className="text-muted">Last updated {item.publishedAt}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-3">
                    {rightContainers?.map((item) => (
                        <div key={item.url} className="right-container mb-3">
                            <div className="card mb-3 p-1" style={{ maxWidth: "100%" }}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title?.slice(0, 50)}</h5>
                                            <p className="card-text">{item.description?.slice(0, 250)}</p>
                                            <p className="card-text"><small className="text-muted">Last updated {item.publishedAt}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cardbody;
