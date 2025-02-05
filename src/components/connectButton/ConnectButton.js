import { Icon } from "@iconify/react";
import Button from "@/components/button/Button";
import { greeting } from "@/portfolio";

export default function ConnectButton() {
  return (
    <Button
      text={
        <>
          <Icon icon="rivet-icons:user-add-solid" />
          <span style={{ marginLeft: "10px" }}>Connect with me</span>
        </>
      }
      newTab={true}
      href={greeting.linkedin_link}
    />
  );
}
