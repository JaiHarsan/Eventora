import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/component/MainLayout";
import Dashboard from "@/pages/Dashboard";
import ExploreEvents from "@/pages/ExploreEvents";
import MyEvents from "@/pages/MyEvents";
import Favorites from "@/pages/Favorites";
import Settings from "@/pages/Settings";
import EventRegistration from "@/pages/EventRegistration";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/explore" element={<ExploreEvents />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="/register" element={<EventRegistration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
