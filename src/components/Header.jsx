import { Link, useLocation } from 'wouter'

export function HeaderPlatform({children, logoTitle}) {
    //Ruta actual
    const [pathName] = useLocation()
    
    let headerTitle = children;

    if(pathName == "/series") {
        headerTitle = "Popular Series"
    } else if (pathName == "/movies") {
        headerTitle = "Popular Movies"
    }

    return (
        <header className="header">
            <section className="header-menu">
                <div className="container">
                    <h1 className='title title-primary'>
                        <Link className='link' href='/'>
                            {logoTitle}
                        </Link>
                        
                    </h1>
                    <nav>
                        <ul className='list list-menu'>
                            <li><a className='link' href="#">Log in</a></li>
                            <li><a className='link link-cta' href="#">Start your free trial</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section className="header-headline">
                <div className="container">
                    <h2 className='title title-page'>{headerTitle}</h2>
                </div>   
            </section>
        </header>
    )
}