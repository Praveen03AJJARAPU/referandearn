import icon1 from '../assets/add_friend.png';
import icon2 from '../assets/notesIcon.png';
import icon3 from '../assets/walletIcon.png';
import { referPara } from '../constants';

function Refer() {
  return (
    <div className="bg-bgBlue">
        {referPara.map((p, id) => (
            <div key={id}>
                <img src={`icon${id}`} alt="" />
                <p>{p}</p>
            </div>
        ))}
    </div>
  )
}

export default Refer