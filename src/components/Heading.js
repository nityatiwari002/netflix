// import '../components-style/Heading.css';
import '../components-style/Heading.css'
function Heading(content) {
    return (
        <div className="heading">
            {content.txt}
            <a href='www.google.com'>View more</a>
        </div>
    );
}

export default Heading;
