
import HeaderInputConsu from '../components/headerInputConsu';
import MagazinesCardsContainer from '../components/MagazineItems/Item-magazineCont'
import MagazinesSideleft from '../components/MagazineItems/MagazinesSideleft'

function MagazineConsu() {
  return (
    <div className="App">
      <div className="ONntwk__main">
        <div className="ONntwk__mainVertical ">
          <HeaderInputConsu />
          <div className="ONntwk__sidecardeswrap">
            <MagazinesSideleft />
            <MagazinesCardsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagazineConsu;
