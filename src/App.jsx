import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const getShortURL = async () => {
    try {
      setLoading(true);
      let { data } = await axios.post("https://rbly.vercel.app/shorturl", {
        website_URL: url,
      });
      console.log(data);
      setShortedUrl(data.shorturl);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      minW={"100vw"}
      minH={"100vh"}
      bgColor={"#323153"}
      display={"flex"}
      alignItems={"center"}
    >
      <Image
        src="/spaceman.svg"
        w={{ base: "10rem", md: "20rem", lg: "30rem" }}
        h={{ base: "10rem", md: "20rem", lg: "30rem" }}
      />
      <Box position={"relative"} bottom={"-2rem"} left={"3rem"}>
        <Text
          fontSize={{ base: "1.5rem", md: "3rem", lg: "4.5rem" }}
          fontWeight={"600"}
          color={"#f5f5f5"}
        >
          rb.ly
        </Text>
        <Box
          pt={"3rem"}
          position={"relative"}
          right={{ base: "6rem", md: "10rem", lg: "10rem" }}
        >
          <InputGroup>
            <Input
              bgColor={"#f5f5f5"}
              placeholder="https://www.google.com"
              w={{ base: "15rem", md: "20rem", lg: "30rem" }}
              fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.1rem" }}
              h={{ base: "1rem", md: "2rem", lg: "3rem" }}
              _focusVisible={{ border: "none", outline: "none" }}
              border={"none"}
              outline={"none"}
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <InputRightElement>
              <Button
                colorScheme="green"
                w={"100%"}
                pl={"3rem"}
                pr={"3rem"}
                h={{ base: "1rem", md: "2rem", lg: "3rem" }}
                position={"relative"}
                top={{ base: "-0.75rem", md: "-0.25rem", lg: "0.25rem" }}
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                onClick={getShortURL}
              >
                Shorten
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        {/* Output */}
        {shortedUrl && (
          <Box
            mt={"3rem"}
            position={"relative"}
            right={"9rem"}
            bgColor={"rgba(10,10,10,0.5)"}
            pl={"3rem"}
          >
            <Text fontSize={"1.5rem"} color={"#f5f5f5"}>
              {shortedUrl}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default App;
