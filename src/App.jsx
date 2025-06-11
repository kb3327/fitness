import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BasicYoga from './pages/BasicYoga';
import BeginnerPilates from './pages/BeginnerPilates';
import BodyBalance from './pages/BodyBalance';
import CardioStrength from './pages/CardioStrength';
import GymTraining from './pages/GymTraining';
import MuscleBuilding from './pages/MuscleBuilding';
import PersonalTraining from './pages/PersonalTraining';
import PowerLifting from './pages/PowerLifting';
import WeightLifting from './pages/WeightLifting';
import Classes from './pages/Classes';
import BMI from './pages/BMI';
import Gallery from './pages/Gallery';
import Appointment from './pages/Appointment';
import Workout from './pages/Workout';
import Nutrition from './pages/Nutrition';
import Guide from './pages/Guide';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Main content area with proper spacing */}
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/basic-yoga" element={<BasicYoga />} />
            <Route path="/beginner-pilates" element={<BeginnerPilates />} />
            <Route path="/gym-training" element={<GymTraining />} />
            <Route path="/muscle-building" element={<MuscleBuilding />} />
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/power-lifting" element={<PowerLifting />} />
            <Route path="/weight-lifting" element={<WeightLifting />} />
            <Route path="/body-balance" element={<BodyBalance />} />
            <Route path="/cardio-strength" element={<CardioStrength />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/guide" element={<Guide />} />



            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;