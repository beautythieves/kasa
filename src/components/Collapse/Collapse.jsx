import React from "react";
import { useState } from "react";
/* create collapse menu*/

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
        <button onClick={() => setIsExpanded(!isExpanded)}> fleche vers le bas </button>
        <h1>{title}</h1>
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