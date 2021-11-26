export default function Footer() {

    let estiloFooter = {
        background: "#191919",
        height: "200px",
        color: "white",
        textAlign: "center"
    }

    let estiloP = {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)"
    }

    return (
        <>
            <footer style={estiloFooter}>
                <p style={estiloP}>Feito com 💛 pelo grupo 2</p>
            </footer>
        </>
    );
}