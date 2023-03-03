import '../../css/contentarea.css'

function ContentArea(props) {
  return (
    <>
      <div className="contentarea">
        {props.children}
      </div>
    </>
  );
}

export default ContentArea;