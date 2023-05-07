import "../components-style/Row.css";
import CardCover from "./CardCover";
import Heading from "./Heading";

function Row(content) {
    let thumbnail = content.thumbnail;
    // console.log(thumbnail);
    return (
        <div className="row">
            <Heading txt={content.title} />
            <CardCover
                fetchUrl={content.fetchUrl}
                thumb={thumbnail ? "Y" : "N"}
            />
        </div>
    );
}

export default Row;
