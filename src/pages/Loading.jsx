import {HeaderPlatform} from '../components/Header'
import {Loading} from '../components/Loading'
import { FooterPlatform } from '../components/Footer'

export function LoadingPage() {
    return(
        <>
            <HeaderPlatform logoTitle="DEMO Streaming">
            Popular Titles
            </HeaderPlatform>

            <main className='main-content container'>
                <Loading/>
            </main>

            <FooterPlatform/>
        </>
    )
}