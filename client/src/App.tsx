import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Article3 from "./pages/Article3";
import Article4 from "./pages/Article4";
import Article5 from "./pages/Article5";
import About from "./pages/About";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/articles/ai-safety-architecture-problem"} component={Article1} />
      <Route path={"/articles/ai-safety-children-adaptable-minds"} component={Article2} />
      <Route path={"/articles/unified-knowledge-theory"} component={Article3} />
      <Route path={"/articles/ai-adaptable-mind"} component={Article4} />
      <Route path={"/article4"} component={Article4} />
      <Route path={"/articles/knowledge-preservation-ai"} component={Article5} />
      <Route path={"/about"} component={About} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
