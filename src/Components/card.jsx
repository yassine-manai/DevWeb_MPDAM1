function Card({children}){
    return(
        <div className="card">
            <div className="content">
                {children}
            </div>
            <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Decline</div>
            </div>
            </div>
        </div>
    )
}

export default Card;