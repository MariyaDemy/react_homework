const Articles = () => {
    let arr = ['el one', 'el two', 'el three'];
    let newArr = arr.map(el => <li>{el}</li>);

    return (
        <div>
            <ul>{newArr}</ul>
        </div>
    )
}

export default Articles;