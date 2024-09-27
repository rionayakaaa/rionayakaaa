import './content.css';
import bg from '../../assets/image/bg.png'

function Content() {
    return (
        <>
            <div className="content">
                <img src={bg}></img>
                <div className='text'>
                    <h1>Brkendara sepuas hati</h1>
                    <p>Berkendara setiap hari dan nikmati moment-moment nya.</p>
                    <button className='button'>Selengkapnya</button>
                </div>
            </div>
        </>
    )
}

export default Content;