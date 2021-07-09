import React, {useEffect} from 'react'
import $ from 'jquery'

export const FAQ = () => {

    useEffect(() => {
        $(document).ready(function () {
            $('.faq').click(function () {
                $(this).children('div.question').toggleClass('visible')
                $(this).children('p.answer').slideToggle('slow')
            })
        })
    }, [])

    return (
        <>
            <div className="faq-banner">
                <div className="content">
                </div>
            </div>
            <div className="container faqs">
                <div className="content">
                    <div className="title">Frequently Asked Questions</div>
                    <div className="faq-wrapper">
                        <div className="faq">
                            <div className="question">Question 1</div>
                            <p className="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto eligendi inventore iste minus repellat.</p>
                        </div>
                        <div className="faq">
                            <div className="question">Question 2</div>
                            <p className="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ex ipsam ipsum provident reiciendis soluta.</p>
                        </div>
                        <div className="faq">
                            <div className="question">Question 3</div>
                            <p className="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid dolore doloremque laboriosam minima odio.</p>
                        </div>
                        <div className="faq">
                            <div className="question">Question 4</div>
                            <p className="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur eum laborum repudiandae totam voluptates?</p>
                        </div>
                        <div className="faq">
                            <div className="question">Question 5</div>
                            <p className="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur eum laborum repudiandae totam voluptates?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}