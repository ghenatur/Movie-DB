import './App.css';
import {useEffect, useState} from "react";
import {apiKey, logo, urlDiscover, urlMovie, urlSearch, urlSort} from "./components/keys";
import searchMovie from "./components/functions/searchMovie";
import Page from "./components/page/Page";
import Input from "./components/header/Input";
import PageButton from "./components/PageButton/PageButton";

function App() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState('1')
    const inputValue = (search) => {
        setSearch(search)
    }
    const btnPage = (page) => {
        setPage(page.target.value)
    }
    useEffect(() => {
        search ?
            searchMovie(urlMovie + urlSearch + `query=${search}&` + apiKey).then(response => setMovies(response.data.results)) :
            searchMovie(urlMovie + urlDiscover + urlSort + `page=${page}&` + apiKey).then(response => setMovies(response.data.results))
    }, [search, page])



    return (
        <>
            <div className="App">
                <img className={'logo'} src={logo} alt="logo"/>
                <div className="header">
                    <Input search={inputValue}/>
                    <PageButton btnPage={btnPage}/>



                </div>
                <Page movies={movies}/>
            </div>


        </>
    );
}

export default App;
