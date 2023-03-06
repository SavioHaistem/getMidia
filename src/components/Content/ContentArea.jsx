import '../../css/contentarea.css'
import data from '../../data/base';

function ContentArea(props) {
  const basedata = new data;
  return (
    <>
      <div className="contentarea">
        <ol className='contentlist'>
          {
            basedata.data.map(item => 
              <li key={item.key} className='contentitem  transparentEffect'>
                <h3> { item.name } </h3>
              </li>
          )}
        </ol>
      </div>
    </>
  );
}

export default ContentArea;