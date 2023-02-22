import React from "react";
import { useState } from "react";
import "./Collapse.scss";
/**
 * [default description]
 *
 * @param   {String}  title    [title description]
 * @param   {String | Array}  content  [content description]
 *
 * @return  {Function}           [return description]
 */
export default function Collapse({title, content}) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <article className="collapse">
        <h1 onClick={() => setIsExpanded(!isExpanded)}>
        {title} <span className="arrow">{isExpanded ? "\u2303" : "\u2304"}</span>
        </h1>
        {showContent(content, isExpanded)}
        </article>
    )
}

function showContent(content, isExpanded) {
    if (isExpanded) {
        if (Array.isArray(content)) {
            return templateArray(content);
        } else {
            return templateString(content);
        }
    }
    return null;
}

function templateArray(content) {
    return (
        <ul>
            {content.map((item) => <li>{item}</li>)}
        </ul>
    );
}

function templateString(content) {
    return <p>{content}</p>;
}