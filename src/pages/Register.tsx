import {
  Alert,
  Box,
  Button,
  Center,
  Field,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Form, useFetcher, useActionData } from "react-router";

const Register = () => {
  const actionData = useActionData();
  const fetcher = useFetcher();
  const busy = fetcher.state !== "idle";

  return (
    <Center>
      <Box
        bg={"white"}
        _dark={{ bg: "gray.800" }}
        w={"100%"}
        maxW={"400px"}
        mt={10}
        border={"1px solid"}
        p={4}
        rounded={5}
        shadow={"md"}
      >
        <Heading mb={4}>Registrieren</Heading>
        {actionData?.error && (
          <Alert.Root status="error" mb={4}>
            <Alert.Content>{actionData.error}</Alert.Content>
          </Alert.Root>
        )}
        <Form action="/register" method="post">
          <Field.Root mb={2} _dark={{ borderColor: "gray.700" }}>
            <Field.Label>Benutzername</Field.Label>
            <Input type="text" name="username" />
          </Field.Root>
          <Field.Root mb={2} _dark={{ borderColor: "gray.700" }}>
            <Field.Label>Passwort</Field.Label>
            <Input type="password" name="password" />
          </Field.Root>
          <Button type="submit" loading={busy} loadingText="Registriere...">
            Registrieren
          </Button>
        </Form>
      </Box>
    </Center>
  );
};

export default Register;
