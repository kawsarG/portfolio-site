import React from 'react';
import p2 from '../../assets/p2.PNG';
import p1 from '../../assets/p1.PNG';
import p3 from '../../assets/p3.PNG';
import p4 from '../../assets/p4.PNG';
import p5 from '../../assets/p5.PNG';
import p6 from '../../assets/p6.PNG';


export default function Service() {
    return (
        <><h1 className='text-center' style={{padding:'40px'}}>-Portfolios-</h1>
        <div className="container-fluid" id='services' style={{backgroundColor:'#FCECBD'}}>
            
            <div className='row'>
                <div className='col-md-6 col-lg-4'>
                     <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p2} alt="track search"/>
                        <div className="card-body">
                            <h5 class="card-title">Track Search App</h5>
                            <p class="card-text">A Track Search App using React Js and Bootstrap4.</p>
                            <a href="https://github.com/kawsarG/Track_Search" class="btn btn-primary">Github Repo</a>
                        </div>
                   </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p5} alt="materialize"/>
                        <div className="card-body">
                            <h5 class="card-title">Materialize CSS Page</h5>
                            <p class="card-text">A Landing page using Materialize CSS.</p>
                            <a href="https://github.com/kawsarG/Materialize-CSS" class="btn btn-primary">Github Repo</a>
                        </div>
                   </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p4} alt="Reciepe"/>
                        <div className="card-body">
                            <h5 class="card-title">Recipe Search App</h5>
                            <p class="card-text">A Recipe Search App using React Js and Bootstrap4.</p>
                            <a href="https://github.com/kawsarG/Recipe-Search" class="btn btn-primary">Github Repo</a>
                        </div>
                   </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p1} alt="Todo"/>
                        <div className="card-body">
                            <h5 class="card-title">Todo App</h5>
                            <p class="card-text">A Todo App using React Js and Bootstrap4.</p>
                            <a href="https://github.com/kawsarG/React-todoList" class="btn btn-primary">Github Repo</a>
                        </div>
                   </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p6} alt="Restaurant app"/>
                        <div className="card-body">
                            <h5 class="card-title">A Restaurant App</h5>
                            <p class="card-text">A Restaurant App using React Js .</p>
                            <a href="https://github.com/kawsarG/Restaurant-React-App" class="btn btn-primary">Github Repo</a>
                        </div>
                   </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                <div class="card" style={{width:'18rem'}}>
                        <img className="card-img-top" src={p3} alt="text-generator"/>
                        <div className="card-body">
                            <h5 class="card-title">Random Text Generator App</h5>
                            <p class="card-text">A Random Text Generator  App using React Js and Bootstrap4.</p>
                            <a href="https://github.com/kawsarG/React-Text-Generator" class="btn btn-primary">Github Repo</a>
                        </div>
                   </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
