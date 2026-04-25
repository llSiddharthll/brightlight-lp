import ServicePageLayout from "../components/ServicePageLayout.jsx";
import { getService } from "../data/services.js";

export default function Pgwp() {
  return <ServicePageLayout service={getService("pgwp")} />;
}
