import '../../css/contentarea.css';
import GetData from '../GetData';

function ContentArea({data, UserSearch}) {
  return (
    <>
      <div className="contentarea">
        <ol className='contentlist'>
        </ol>
      </div>
    </>
  );
}

export default GetData(ContentArea);