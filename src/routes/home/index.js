import { h } from 'preact';
import "@justinribeiro/lite-youtube";
import style from './style.css';

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <lite-youtube videoid="guJLfqTFfIw"></lite-youtube>
  </div>
);

export default Home;
