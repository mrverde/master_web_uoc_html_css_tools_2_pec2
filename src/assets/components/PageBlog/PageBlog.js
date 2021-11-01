import React from "react";

import chineseTemple from '../../images/buddha-tempel-1468928.jpg'

const PageBlog = () => {
    return <article>
        <div className="jumbotron" >
            <div className="container for-about">
                <h1 className="display-4">Blog Article or Information / Bio Page</h1>
                <p className="lead">by Author One</p>
            </div>
        </div>

        <h1>Blog Article or Information / Bio Page</h1>
        <h5>by Author One</h5>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts.</p>
        <blockquote cite="https://es.wikiquote.org/wiki/Buda_Gautama">
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                at the coast of the Semantics, a large language ocean. Far far away, behind the
                word mountains.
                <strong>Zu Ming Yu</strong>
            </p>
        </blockquote>

        <p>Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean. Far far away, behind the
            word mountains. Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.</p>
        <hr className="mt-3 mb-3" />
        <ol>
            <li>
                <h4>Item One</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                    the coast of the Semantics.</p>
            </li>
            <li>
                <h4>Item Two</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                    the coast of the Semantics, a large language ocean.</p>
            </li>
            <li>
                <h4>Item Three</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                    the coast of the Semantics, a large language ocean.</p>
            </li>
        </ol>
        <hr className="mt-3 mb-3" />
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast
            of the Semantics, a large language ocean. Far far away, behind the word mountains, far
            from the countries Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove</p>
        <img src={chineseTemple} alt="Chinese temple" />
        <blockquote cite="https://es.wikiquote.org/wiki/Buda_Gautama">
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                at the coast of the Semantics, a large language ocean. Far far away, behind the
                word mountains.
                <strong>Zu Ming Yu</strong>
            </p>
        </blockquote>

    </article>
}

export default PageBlog;