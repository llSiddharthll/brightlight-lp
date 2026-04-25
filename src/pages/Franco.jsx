import ServicePageLayout from "../components/ServicePageLayout.jsx";
import { getService } from "../data/services.js";

export default function Franco() {
  return <ServicePageLayout service={getService("franco")} />;
}
