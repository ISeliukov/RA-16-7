import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import { ListVideos } from './engine/ListVideos';
import { List } from './engine/Popular';
import './App.css';
import './css/main.css';
import './css/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2023-10-20 13:24:00'
                },
                {
                    url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2023-10-19 12:10:00'
                },
                {
                    url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2023-10-18 23:16:00'
                },
                {
                    url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2022-10-10 12:10:00'
                },
                {
                    url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2021-10-20 16:17:00'
                },
                {
                    url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2020-10-20 05:24:00'
                },
            ]
        };
    }

    render() {
        return (
            <ListVideos list={this.state.list} />
        );
    }
}

function AppPopular() {
    const [list, setList] = useState([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}

export { App, AppPopular }
