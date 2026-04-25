import ServicePageLayout from "../components/ServicePageLayout.jsx";
import { getService } from "../data/services.js";

export default function Spousal() {
  return <ServicePageLayout service={getService("spousal")} />;
}
