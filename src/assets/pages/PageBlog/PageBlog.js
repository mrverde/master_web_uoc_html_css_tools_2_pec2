import React, { useEffect } from "react";

import chineseTemple from '../../images/buddha-tempel-1468928.jpg'
import "./PageBlog.scss"

const PageBlog = () => {
    return <article className="blog">
        <div className="blog-jumbotron-container">
            <div className="jumbotron blog-jumbotron" >
                <div className="container for-about">
                    <h1 className="display-4 blog-jumbotron-text">Blog Article or Information / Bio Page</h1>
                    <p className="lead blog-jumbotron-author">by Author One</p>
                </div>
            </div>
        </div>
        <div className="blog-container">
            <div className="blog-subcontainer">
                <p className="blog-paragraph blog-paragraph_header">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                <blockquote className="blog-quote" cite="https://es.wikiquote.org/wiki/Buda_Gautama">
                    <p className="blog-paragraph blog-paragraph_quote">
                        Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                        at the coast of the Semantics, a large language ocean. Far far away, behind the
                        word mountains.</p>
                    <strong>Zu Ming Yu</strong>
                </blockquote>

                <p className="blog-paragraph blog-paragraph_endline">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                    at the coast of the Semantics, a large language ocean. Far far away, behind the
                    word mountains. Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.</p>
                <hr className="mt-3 mb-3" />
                <ol className="blog-list">
                    <li className="blog-list-element">
                        <h4 className="blog-list-element-header">Item One</h4>
                        <p className="blog-paragraph">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics.</p>
                    </li>
                    <li className="blog-list-element">
                        <h4 className="blog-list-element-header">Item Two</h4>
                        <p className="blog-paragraph">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.</p>
                    </li>
                    <li className="blog-list-element">
                        <h4 className="blog-list-element-header">Item Three</h4>
                        <p className="blog-paragraph">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.</p>
                    </li>
                </ol>
                <hr className="mt-3 mb-3" />
                <p className="blog-paragraph blog-paragraph_header blog-paragraph_startline">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <p className="blog-paragraph">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                    of the Semantics, a large language ocean. Far far away, behind the word mountains, far
                    from the countries Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove</p>
                <img className="blog-image" src={chineseTemple} alt="Chinese temple" />
                <blockquote className="blog-quote" cite="https://es.wikiquote.org/wiki/Buda_Gautama">
                    <p className="blog-paragraph blog-paragraph_quote">
                        Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                        at the coast of the Semantics, a large language ocean. Far far away, behind the
                        word mountains. </p><br />
                    <strong>Zu Ming Yu</strong>

                </blockquote>
            </div>
        </div>
    </article>
}

export default PageBlog;