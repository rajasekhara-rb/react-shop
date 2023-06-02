import React from "react";

function CardsSection(props) {

    let setStars = (count) => {
        let StarArray = [];
        for (let j = 1; j <= count; j++) {
            StarArray.push(<i class="bi bi-star-fill text-warning"></i>);
        }
        return StarArray;

    }

    return (
        <>
            <div className="container-fluid bg-light text-dark d-flex flex-wrap justify-content-center px-4 px-lg-5 mt-5">
                {props.products.map((product, i) => {
                    return (
                        <div className="card col m-4 col-xs-12 col-sm-3 d-flex flex-column justify-content-center align-items-center" key={i}>
                            <div>{product.sale ? <p className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{product.sale}</p> : ""}</div>
                            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{product.itemType}</h5>
                                <div>{product.starCount > 0 ? <p>{setStars(product.starCount)}</p> : ""}</div>
                                <p className="card-text"><s className="text-secondary">{product.price.oldPrice}</s> {product.price.newPrice}</p>
                                <button href="/" className="btn btn-primary" onClick={props.manageItems}>{product.buttonName}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CardsSection;