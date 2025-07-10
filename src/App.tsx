import { Bleed, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import { Outlet, useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <Bleed bg={"blue.400"} _dark={{ bg: "blue.900" }} p={25}>
        <Flex justifyContent="space-between">
          <Heading
            onClick={() => navigate("/")}
            size={"3xl"}
            cursor={"pointer"}
          >
            Bestellsystem
          </Heading>
          <Flex gap={2}>
            <ColorModeButton />
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </Flex>
        </Flex>
      </Bleed>
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
