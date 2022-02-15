function isPal(str) {
    let palArr = str.split("");
    let reverseVal = "";
    for (let i = 0; i < palArr.length; i++) {
        if (palArr[i] === ' ') palArr.splice(i, 1);
    }
    var inputValue = palArr.join('').toLowerCase();
    reverseVal = palArr.reverse().join('').toLowerCase();
    if (inputValue.indexOf(reverseVal) !== -1) return true;
    else return false;
}

const ComposableUser = ({ children }) => {
    if (children.includes('e')) {
        return <span>It’s a Premium User! Welcome, {children}! </span>;
    }

    if (children.length > 5) {
        return <span>It’s user {children.substr(0, 4).concat("...")}! </span>;
    }

    if (isPal(children)) {
        return <span>It's user <span className="name--highlighted">{children}</span> </span>
    }

    else return <span>It's user {children} </span>;
}

export default ComposableUser;
