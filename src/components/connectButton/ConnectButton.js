import Button from "@/components/button/Button";
import { whoami } from "@/portfolio";
import "./ConnectButton.css";

export default function ConnectButton() {
  return (
    <Button
      text="Connect with me"
      newTab={true}
      href={whoami.button_link}
      icon="rivet-icons:user-add-solid"
    />
  );
}
