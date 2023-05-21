import './App.css'
import ServiceList from './ServiceList';
import Banner from './Banner';
import Hero from './Hero';

export default function App() {
  return (
    <main>
      <div>
        <Banner />
        <Hero />
        <ServiceList />
      </div>
    </main>
  )
}
