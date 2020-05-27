import React from 'react';
import p2 from '../../assets/blogs/p2.png';
import p1 from '../../assets/blogs/p1.jpeg';
import p3 from '../../assets/blogs/p3.jpeg';
import p4 from '../../assets/blogs/p4.jpeg';
import p5 from '../../assets/blogs/p5.jpeg';
import p6 from '../../assets/blogs/p6.png';

export default function Blog() {
    return (
        <>
        <h1 className='text-center' style={{margin:'40px'}} id='blogs'>-Blogs-</h1>
        <div className='container-fluid'  style={{backgroundColor:'lightGrey',padding:'20px'}}> 
            <div className='row' >
                <div className='col-md-6 col-lg-4'>
                     <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p1} alt="track search"/>
                        <div className="card-body">
                            <h5 class="card-title">React Fundamentals for Beginner</h5>
                            <p class="card-text">An article on React Fundamental</p>
                            <a href="https://medium.com/@mail.kawsar12/react-fundamentals-for-beginner-cb38a43aba9b" class="btn btn-primary">Read in Medium</a>
                        </div>
                   </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p2} alt="materialize"/>
                        <div className="card-body">
                            <h5 class="card-title">10 Topics for React Intermediate Developers</h5>
                            <p class="card-text">An article for React Intermediate Developers.</p>
                            <a href="https://medium.com/@mail.kawsar12/10-topics-for-react-beginners-4982445a370c" class="btn btn-primary">Read in Medium</a>
                        </div>
                   </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p3} alt="Reciepe"/>
                        <div className="card-body">
                            <h5 class="card-title">All About React Hooks </h5>
                            <p class="card-text">Fundamental Hooks on React From Scratch.</p>
                            <a href="https://medium.com/@mail.kawsar12/all-about-react-hooks-2c15f814974b" class="btn btn-primary">Read in Medium</a>
                        </div>
                   </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p4} alt="Todo"/>
                        <div className="card-body">
                            <h5 class="card-title">Getting Started With Algorithms in JavaScript</h5>
                            <p class="card-text">An article for React algorithm Lovers(Must Raed).</p>
                            <a href="https://medium.com/@mail.kawsar12/getting-started-with-algorithms-in-javascript-440acedccac" class="btn btn-primary">Read in Medium</a>
                        </div>
                   </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p5} alt="Restaurant app"/>
                        <div className="card-body">
                            <h5 class="card-title">Coding Interview Questions and Answers</h5>
                            <p class="card-text">Top 10 JavaScript Coding Interview Questions and Answers</p>
                            <a href="https://medium.com/@mail.kawsar12/top-10-javascript-coding-interview-questions-and-answers-e0e2b135ae61" class="btn btn-primary">Read in Medium</a>
                        </div>
                   </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p6} alt="text-generator"/>
                        <div className="card-body">
                            <h5 class="card-title">Interview Questions and Answers</h5>
                            <p class="card-text">Top 10 React Interview Questions and Answers.</p>
                            <a href="https://medium.com/@mail.kawsar12/top-10-react-interview-questions-and-answers-44d55631fbd4" class="btn btn-primary">Read in Medium</a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}
