import './Styles.css'
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="container-404">
            <h1>404</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae reiciendis libero nobis incidunt est earum! Vel incidunt, optio, necessitatibus tempore debitis tenetur tempora, reiciendis ipsum blanditiis aspernatur excepturi! Dolorum?</p>
            <button>
                <Link to="/" className="button-link">Retornar para Home</Link>
            </button>
        </div>
    );
}

export default Error
