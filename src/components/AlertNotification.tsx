import {
  Alert,
  AlertIcon,
  AlertDescription,
  useDisclosure,
  Box,
  CloseButton,
} from "@chakra-ui/react";
import { AlertNotificationProps } from "../types/alert-notification";
import "../styles/alert-notificiation.css";

export function AlertNotification({ message, error }: AlertNotificationProps) {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <div className="alert-container sm:w-96 md:w-full mb-10">
      <Alert
        status={!error ? "error" : "success"}
        padding={10}
        fontSize={16}
        borderRadius={10}
        justifyContent={"space-between"}
      >
        <div className="flex items-center">
          <AlertIcon />
          <Box paddingRight={20}>
            <AlertDescription>{message}</AlertDescription>
          </Box>
        </div>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    </div>
  ) : (
    <div></div>
  );
}
