import Routes from "./src/routes";
import { ModalProvider } from "./src/modules/exercise/contexts/ModalContext";

export default function App() {
  return (
    <ModalProvider>
      <Routes />
    </ModalProvider>
  );
}
