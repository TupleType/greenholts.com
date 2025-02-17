import { Icon } from "@iconify/react";
import Button from "@/components/button/Button";
import { whoami } from "@/portfolio";
import "./ConnectButton.css";

export default function ConnectButton() {
  return (
    <Button
      text={
        <div className="connectButton">
          <Icon icon="rivet-icons:user-add-solid" className="icon" />
          <span>Connect with me</span>
        </div>
      }
      newTab={true}
      href={whoami.button_link}
    />
  );
}
