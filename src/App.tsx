
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Reservations from "./pages/Reservations";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Loyalty from "./pages/Loyalty";
import Catering from "./pages/Catering";
import GiftCards from "./pages/GiftCards";
import Nutrition from "./pages/Nutrition";
import Wine from "./pages/Wine";
import Promotions from "./pages/Promotions";
import FAQ from "./pages/FAQ";
import PrivateEvents from "./pages/PrivateEvents";
import ChefSpecials from "./pages/ChefSpecials";
import Sustainability from "./pages/Sustainability";
import Masterclasses from "./pages/Masterclasses";
import OrderTracking from "./pages/OrderTracking";
import Franchise from "./pages/Franchise";
import Press from "./pages/Press";
import Locations from "./pages/Locations";
import Partnerships from "./pages/Partnerships";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/chef-specials" element={<ChefSpecials />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/masterclasses" element={<Masterclasses />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/press" element={<Press />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/partnerships" element={<Partnerships />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
