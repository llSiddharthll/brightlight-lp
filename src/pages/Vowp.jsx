import ServicePageLayout from "../components/ServicePageLayout.jsx";
import { getService } from "../data/services.js";

export default function Vowp() {
  return <ServicePageLayout service={getService("vowp")} />;
}
