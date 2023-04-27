import {Link, useRoute} from 'wouter'


export function Card({children, img, url, path}) {
    const [isActive] = useRoute(path)

    return (
        <article className={`card ${isActive ? 'active' : ''}`}>
            <Link className="link link-card" href={url}>
                <img className="img" src={`./src/assets/${img}.png`} alt={`Card de ${img}`} />
                <h3 className="title title-card">{children}</h3>
            </Link>
            <p className="tx tx-card">Popular {children}</p>
        </article>
    )
}