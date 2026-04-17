function InlineStyleSample(){

const styleObj = {
    backgroundColor: "blue",
    color: "white",
    margin: "140px",
    padding: "20px",
    fontSize: "20px"
};

return(
    <>
        <div style={styleObj}>Hello Inline CSS</div>
        <p>Global CSS</p>
    </>
)
}

export default InlineStyleSample