import React from 'react';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Victor Morales</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={process.env.PUBLIC_URL + '/me.jpeg'}alt="Victor Morales" />

                <p>
                Full-Stack Developer trying to break into the community. 
                </p>
            </div>
        </section>
    )
}

export default About;