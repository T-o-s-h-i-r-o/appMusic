export const Registration = () => {
    const DeleteToken = () => {
        localStorage.removeItem('token');
    }

    return (
        <>
        <DeleteToken />
        <div>
            <h1>Registration</h1>
        </div>
        </>
    )
}