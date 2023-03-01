import React from "react";
import { useState } from "react";
import "./Collapse.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
 
/**
 * [default description]
 *
 * @param   {String}  title    [title description]
 * @param   {String | Array}  content  [content description]
 *
 * @return  {Function}           [return description]
 */
 const angleDown = <FontAwesomeIcon icon={faAngleDown} />
 const angleUp = <FontAwesomeIcon icon={faAngleUp} /> 
 export default function Collapse({title, content}) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <article className="collapse">
        <h1 className="collapse_title" onClick={() => setIsExpanded(!isExpanded)}>
          {title} 
          <span className="arrow">{isExpanded ? angleUp : angleDown}</span>
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
        <ul className="collapse_content">
            {content.map((item) => <li>{item}</li>)}
        </ul>
    );
}

function templateString(content) {
    return <p className= "content_p">{content}</p>;
}