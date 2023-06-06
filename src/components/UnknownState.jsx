import Login from "./Login";
import Main from "./Main";

function UnknownState({
    isLoggedIn,
    points,
    onAddPointClick,
    onEditPointClick,
    setPoints,
    initialPoints,
    onLogin,
    onChange,
    formValue,
    setFormValue
}) {
    if (isLoggedIn) {
        return (
            <Main
                points={points}
                setPoints={setPoints}
                onAddPointClick={onAddPointClick}
                onEditPointClick={onEditPointClick}
                initialPoints={initialPoints}
            />
        )
    } else {
        return (
            <Login
                onLogin={onLogin}
                onChange={onChange}
                formValue={formValue}
                setFormValue={setFormValue}
            />
        )
    }
}

export default UnknownState;