export function HeaderPlatform({children, logoTitle}) {
    return (
        <header className="header">
            <section className="header-menu">
               <h1 className='title title-primary'>{logoTitle}</h1>
            <nav>
                <ul className='list list-menu'>
                    <li><a className='link' href="#">Log in</a></li>
                    <li><a className='link link-cta' href="#">Start your free trial</a></li>
                </ul>
            </nav> 
            </section>
            <section className="header-headline">
                <h2 className='title title-page'>{children}</h2>
            </section>
        </header>
    )
}