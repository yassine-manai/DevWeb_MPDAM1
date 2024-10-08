/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Comment({name, avatar, description, pubDate, evaluation}){
    //console.log(props);
    return(
        <div className="ui comments">
            <div className="comment">
                <a className="avatar">
                    <img src={avatar} />
                </a>
                <div className="content">
                <a className="author">{name}</a>
                <div className="metadata">
                    <div className="date">{pubDate}</div>
                    <div className="rating">
                    <i className="star icon"></i>
                    {evaluation} Faves
                    </div>
                </div>
                <div className="text">
                    {description}
                </div>
                </div>
            </div>
            </div>
    )

}

export default Comment;
